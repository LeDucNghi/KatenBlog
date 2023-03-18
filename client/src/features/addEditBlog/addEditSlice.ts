import { Errors, LoadingState, Post, PostState } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const initialState: PostState = {
  errors: {
    isError: false,
    repsonse: {
      data: {
        message: "",
      },
    },
    status: 0,
  },

  isLoading: false,
  isPosting: {
    isAdd: false,
    isEdit: false,
  },

  imageFile: null,
  postData: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostData(state) {
      state.isLoading = true;
    },

    fetchPostDataSuccess(state, action: PayloadAction<Post>) {
      state.isLoading = false;
      state.postData = action.payload;
    },

    fetchPostDataFailed(state, action: PayloadAction<Errors>) {
      state.isLoading = false;
      state.errors!.status = action.payload.status;
      state.errors!.isError = action.payload.isError;
      state.errors!.repsonse.data.message =
        action.payload.repsonse.data.message;
    },

    setImageFile(state, action: PayloadAction<File>) {
      state.imageFile = action.payload;
    },

    setPostingStatus(state, action: PayloadAction<LoadingState>) {
      state.isPosting.isAdd = action.payload.isAdd;
      state.isPosting.isEdit = action.payload.isEdit;
    },
  },
});

export const {
  fetchPostDataFailed,
  fetchPostData,
  fetchPostDataSuccess,
  setImageFile,
  setPostingStatus,
} = postSlice.actions;

export const selectPostData = (state: RootState) => state.post.postData;
export const selectImageFile = (state: RootState) => state.post.imageFile;
export const selectPostingStatus = (state: RootState) => state.post.isPosting;
export const selectFetchPostFailed = (state: RootState) => state.post.errors;
export const selectLoading = (state: RootState) => state.post.isLoading;

export const postReducer = postSlice.reducer;
