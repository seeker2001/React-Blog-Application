import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";

/** Redux store configuration **/
export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});
