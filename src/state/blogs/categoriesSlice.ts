import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../Helpers/axios';
import { RootState } from '../store';

export interface Category {
  id: string;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'fetchCategories', 
  async () => {
  try {
    const response = await axiosInstance.get('/api/categories');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.categories;
      })
      .addCase(fetchCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message ?? 'Failed to fetch categories';
      });
  },
});

export const selectCategoriesState = (state: RootState) => state.categories;
export default categoriesSlice.reducer;