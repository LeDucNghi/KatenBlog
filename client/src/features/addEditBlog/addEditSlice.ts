import { LoadingState, Post, PostState } from "../../models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const initialState: PostState = {
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
    getPostData(state, action: PayloadAction<Post>) {
      state.postData = action.payload;
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

export const { getPostData, setImageFile, setPostingStatus } =
  postSlice.actions;

export const selectPostData = (state: RootState) => state.post.postData;
export const selectImageFile = (state: RootState) => state.post.imageFile;
export const selectPostingStatus = (state: RootState) => state.post.isPosting;

export const postReducer = postSlice.reducer;
