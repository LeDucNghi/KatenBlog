import { authReducer } from "../features/auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "../features/addEditBlog/addEditSlice";

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
});

export default rootReducer;
