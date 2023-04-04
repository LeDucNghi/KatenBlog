import {
  fetchCommentList,
  fetchCommentListSuccess,
  fetchPostData,
  fetchPostDataFailed,
  fetchPostDataSuccess,
  fetchPostList,
  fetchPostListSuccess,
  setPostingStatus,
} from "./addEditSlice";

import { AppThunk } from "../../app/store";
import { Post } from "../../models";
import commentApi from "../../api/commentApi";
import postsApi from "../../api/postsApi";
import { setUserType } from "../auth/authSlice";
import { toast } from "react-toastify";

export const handleGetAllPost = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchPostList());
  try {
    const {
      data: { postList },
    } = await postsApi.getAll();

    dispatch(fetchPostListSuccess(postList));
  } catch (error) {
    console.log(
      "🚀 ~ file: addEditThunk.ts:19 ~ handleGetAllPost ~ error:",
      error
    );
  }
};

// GET DETAIL POST
export const handleGetDetailPost =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    const type = "isBlog";

    dispatch(fetchPostData());

    try {
      const res = await postsApi.getDetailPost(id!, type);

      if (res.data) {
        await dispatch(setUserType(res.data.userType!));

        await dispatch(fetchPostDataSuccess(res.data.post));
      }
    } catch (error: any) {
      console.log("🚀 ~ file: addEditThunk.ts:52 ~ error:", error)
      if (error && error.response) {
        const status: number = error.response.status;
        const message: string = error.response.data.message;
        dispatch(
          fetchPostDataFailed({
            status: status,
            isError: true,
            repsonse: { data: { message: message } },
          })
        );
      }
    }
  };

// ADD / EDIT POST
export const addEditPost =
  (values: Post, id: string): AppThunk =>
  async (dispatch, getState) => {
    console.log("🚀 ~ file: addEditThunk.ts:49 ~ values:", values);
    const userType = getState().auth.userType;
    const postingStatus = getState().post.isPosting;
    var image = getState().post.imageFile;

    if (userType === "isPoster") {
      await dispatch(setPostingStatus({ ...postingStatus, isEdit: true }));
    } else await dispatch(setPostingStatus({ ...postingStatus, isAdd: true }));

    const newValue =
      userType === "isPoster"
        ? { ...values, image: image ? image : values.image, id: id }
        : { ...values, image: image };

    try {
      const res =
        userType === "isPoster"
          ? await postsApi.updatePost(newValue)
          : await postsApi.addNewPost(newValue);
      if (res) {
        toast.success(
          `🦄 ${
            userType === "isPoster" ? `Upload` : `Update`
          } post successful 🥳`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

        // await setIsLoading(false);
        if (userType === "isPoster") {
          await dispatch(setPostingStatus({ ...postingStatus, isEdit: false }));
        } else
          await dispatch(setPostingStatus({ ...postingStatus, isAdd: false }));
      }
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

export const handleGetPostComment =
  (id: string): AppThunk =>
  async (dispatch, getState) => {
    dispatch(fetchCommentList());
    try {
      const res = await commentApi.getComment(id);
      console.log("🚀 ~ file: addEditThunk.ts:122 ~ res:", res.data);

      dispatch(fetchCommentListSuccess(res.data.data));
      // const userProfile = await authApi.getCommentProfile(res.data);
    } catch (error) {
      console.log(
        "🚀 ~ file: Comment.tsx:35 ~ handleGetPostComment ~ error",
        error
      );
    }
  };

export const handlePostComment =
  (id: string, comment: string): AppThunk =>
  async (dispatch, getState) => {
    // e.preventDefault();

    const content = comment;

    try {
      const res = await commentApi.comment({ id, content });
      console.log("🚀 ~ file: Comment.tsx:20 ~ handlePostComment ~ res", res);
    } catch (error) {
      console.log(
        "🚀 ~ file: Comment.tsx:22 ~ handlePostComment ~ error",
        error
      );
    }
  };
