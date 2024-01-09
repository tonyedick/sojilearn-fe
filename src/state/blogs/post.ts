import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../Helpers/axios';
import { RootState } from '../store';

export interface Post {
  id: string;
  title: string;
  featuredImage: string;
  category: string;
  created_at: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'post',
  async () => {
    try {
      const response = await axiosInstance.get(`/api/blogs`);
      return response.data;
    } catch (error) {
      throw error;
    }
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload.blogs; 
      })
      .addCase(fetchPosts.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? 'Failed to fetch blogs';
      });
  },
});

export const selectPosts = (state: RootState) => state.posts;
export default postSlice.reducer;
