// blogSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "../../Helpers/axios";

interface Blog {
  blog: any;
  id: number;
  featuredImage: string;
  title: string;
  detailsOne: string;
  detailsTwo: string;
  detailsThree?: string;
  image?: string;
  category: string;
  created_at: string;
}

interface BlogState {
  blog: Blog | null; 
  featuredImage: string | null;
  image: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blog: null,
  featuredImage: null,
  image: null,
  loading: false,
  error: null,
};

export const fetchBlogById = createAsyncThunk(
  "fetchBlogById",
  async (id: number) => {
    try {
      const response = await axiosInstance.get(`/api/blogs/${id}`);
      return response.data
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, { payload }) => {
        const { blog, featuredImage, image } = payload; // Destructure properties
        state.blog = blog;
        state.featuredImage = featuredImage;
        state.image = image;
      })
      .addCase(fetchBlogById.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? "Failed to fetch blog";
      });
  },
});

export default blogSlice.reducer;

