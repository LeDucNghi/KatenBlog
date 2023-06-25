import {
  ApiStatus,
  Comment,
  Errors,
  LoadingState,
  PaginationParams,
  Post,
  PostState,
  RecentBlog,
} from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const initialState: PostState = {
  apiStatus: "Network Error",

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
    isCategory: false,
    isRecentBlog: false,
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
  userPostList: [],
  commentList: [],
  categoryList: [],
  recentList: [],
  popularList: [],
  latestList: [],

  imageFile: null,
  postData: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    checkApiStatus(state, action: PayloadAction<ApiStatus>) {
      state.apiStatus = action.payload;
    },

    fetchPostData(state) {
      state.isFetChing.isPostDetail = true;
    },

    fetchPostList(state) {
      state.isFetChing.isPostList = true;
    },

    fetchCommentList(state) {
      state.isFetChing.isComment = true;
    },

    fetchingRecentBlog(state) {
      state.isFetChing.isRecentBlog = true;
    },

    fetchingCategoryBlog(state) {
      state.isFetChing.isCategory = true;
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

    fetchUserPostList(state, action: PayloadAction<Post[]>) {
      state.isFetChing.isCategory = false;
      state.userPostList = action.payload;
    },

    fetchPopularPost(state, action: PayloadAction<Post[]>) {
      state.popularList = action.payload;
    },

    fetchLatestPosts(state, action: PayloadAction<Post[]>) {
      state.latestList = action.payload;
    },

    fetchCategoryListSuccess(state, action: PayloadAction<Post[]>) {
      state.categoryList = action.payload;
      state.isFetChing.isCategory = false;
    },

    fetchUserRecentBlog(state, action: PayloadAction<RecentBlog[]>) {
      state.isFetChing.isRecentBlog = false;
      state.recentList = action.payload;
    },

    fetchPagination(state, action: PayloadAction<PaginationParams>) {
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
  checkApiStatus,
  fetchPostData,
  fetchPostList,
  fetchingRecentBlog,
  fetchCommentList,
  fetchUserPostList,
  fetchPopularPost,
  fetchLatestPosts,
  fetchingCategoryBlog,
  fetchPostDataSuccess,
  fetchPostListSuccess,
  fetchCommentListSuccess,
  fetchCategoryListSuccess,
  fetchPagination,
  fetchPostDataFailed,
  setImageFile,
  setPostingStatus,
  fetchUserRecentBlog,
} = postSlice.actions;

export const selectApiStatus = (state: RootState) => state.post.apiStatus;
export const selectPostData = (state: RootState) => state.post.postData;
export const selectImageFile = (state: RootState) => state.post.imageFile;
export const selectPostingStatus = (state: RootState) => state.post.isPosting;
export const selectFetchPostFailed = (state: RootState) => state.post.errors;
export const selectIsFetchingPostList = (state: RootState) =>
  state.post.isFetChing;
export const selectPostList = (state: RootState) => state.post.postList;
export const selectCommentList = (state: RootState) => state.post.commentList;
export const selectPaginate = (state: RootState) => state.post.pagination;
export const selectUserPostList = (state: RootState) => state.post.userPostList;
export const selectCategoryList = (state: RootState) => state.post.categoryList;
export const selectUserRecentBlog = (state: RootState) => state.post.recentList;
export const selectPopularList = (state: RootState) => state.post.popularList;
export const selectLatestList = (state: RootState) => state.post.latestList;

export const postReducer = postSlice.reducer;
