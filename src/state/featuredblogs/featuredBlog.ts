import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../Helpers/axios';
import { RootState } from '../store';

export interface FeaturedBlog {
  id: string;
  title: string;
  intro: string;
  detailsOne: string;
  detailsTwo: string;
  detailsThree: string;
  featuredImage: string;
  image: string;
  category: string;
}

interface FeaturedBlogsState {
  featuredBlogs: FeaturedBlog[];
  loading: boolean;
  error: string | null;
}

const initialState: FeaturedBlogsState = {
  featuredBlogs: [],
  loading: false,
  error: null,
};

export const fetchFeaturedBlogs = createAsyncThunk(
  'fetchFeaturedBlogs',
  async () => {
    try {
      const response = await axiosInstance.get(`/api/blogs/featured`);
      return response.data;
    } catch (error) {
      throw error;
    }
});

const featuredBlogSlice = createSlice({
  name: 'featuredBlog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.featuredBlogs = payload.featuredBlogs; 
      })
      .addCase(fetchFeaturedBlogs.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? 'Failed to fetch featured blog';
      });
  },
});

export const selectFeaturedBlogs = (state: RootState) => state.featuredBlogs;
export default featuredBlogSlice.reducer;
