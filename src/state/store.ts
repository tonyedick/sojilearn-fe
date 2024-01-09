import { configureStore } from "@reduxjs/toolkit";
import PostReducer from './blogs/post';
import FeaturedBlogReducer from './featuredblogs/featuredBlog';
import BlogsReducer from '../state/blogs/blogSlice';
import CategoryReducer from '../state/blogs/categoriesSlice';

export const store = configureStore({
  reducer: {

    // BLOG POSTS
    posts: PostReducer,

    // FEATURED BLOG
    featuredBlogs: FeaturedBlogReducer,

    // SINGLE BLOG
    blog: BlogsReducer,

    // CATEGORIES
    categories: CategoryReducer,
  },
  // devTools: false
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
