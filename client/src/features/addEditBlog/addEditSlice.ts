import {
  Comment,
  Errors,
  LoadingState,
  PaginationParams,
  Post,
  PostState,
} from "../../models";
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
    isComment: false,
  },

  isPosting: {
    isAdd: false,
    isEdit: false,
  },

  pagination: {
    page: 1,
    limit: 3,
    totalRows: 0,
    totalPages: 0,
  },

  postList: [],
  commentList: [],

  imageFile: null,
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

    fetchCommentList(state) {
      state.isFetChing.isComment = true;
    },

    fetchPostListSuccess(state, action: PayloadAction<Post[]>) {
      state.isFetChing.isPostList = true;
      state.postList = action.payload;
    },

    fetchPostDataSuccess(state, action: PayloadAction<Post>) {
      state.isFetChing.isPostDetail = false;
      state.postData = action.payload;
    },

    fetchCommentListSuccess(state, action: PayloadAction<Comment[]>) {
      state.isFetChing.isComment = false;
      state.commentList = action.payload;
    },

    fetchCommentListPagination(state, action: PayloadAction<PaginationParams>) {
      state.pagination.page = action.payload.page;
      state.pagination.limit = action.payload.limit;
      state.pagination.totalRows = action.payload.totalRows;
      state.pagination.totalPages = action.payload.totalPages;
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
  fetchCommentList,
  fetchPostDataSuccess,
  fetchPostListSuccess,
  fetchCommentListSuccess,
  fetchCommentListPagination,
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
export const selectCommentList = (state: RootState) => state.post.commentList;
export const selectCommentListPaginate = (state: RootState) =>
  state.post.pagination;

export const postReducer = postSlice.reducer;
