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

  isFetChing: {
    isPostDetail: false,
    isPostList: false,
  },

  isPosting: {
    isAdd: false,
    isEdit: false,
  },

  imageFile: null,
  postList: [],
  postData: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostData(state) {
      state.isFetChing.isPostDetail = true;
    },

    fetchPostList(state) {
      state.isFetChing.isPostList = true;
    },

    fetchPostListSuccess(state, action: PayloadAction<Post[]>) {
      state.isFetChing.isPostList = true;
      state.postList = action.payload;
    },

    fetchPostDataSuccess(state, action: PayloadAction<Post>) {
      state.isFetChing.isPostDetail = false;
      state.postData = action.payload;
    },

    fetchPostDataFailed(state, action: PayloadAction<Errors>) {
      state.isFetChing.isPostDetail = false;
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
  fetchPostData,
  fetchPostList,
  fetchPostDataSuccess,
  fetchPostListSuccess,
  fetchPostDataFailed,
  setImageFile,
  setPostingStatus,
} = postSlice.actions;

export const selectPostData = (state: RootState) => state.post.postData;
export const selectImageFile = (state: RootState) => state.post.imageFile;
export const selectPostingStatus = (state: RootState) => state.post.isPosting;
export const selectFetchPostFailed = (state: RootState) => state.post.errors;
export const selectIsFetchingPostList = (state: RootState) =>
  state.post.isFetChing;
export const selectPostList = (state: RootState) => state.post.postList;

export const postReducer = postSlice.reducer;
