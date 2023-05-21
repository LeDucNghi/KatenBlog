import { Comment, PaginationParams, Post, Profile } from "../../models";
import {
  fetchCommentList,
  fetchCommentListSuccess,
  fetchPagination,
  fetchPostData,
  fetchPostDataFailed,
  fetchPostDataSuccess,
  fetchPostList,
  fetchPostListSuccess,
  fetchUserPostList,
  setPostingStatus,
} from "./addEditSlice";

import { AppThunk } from "../../app/store";
import commentApi from "../../api/commentApi";
import postsApi from "../../api/postsApi";
import { setUserType } from "../auth/authSlice";
import { toast } from "react-toastify";

export const handleGetAllPost = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchPostList());
  try {
    const {
      data: { data },
    } = await postsApi.getAll();

    dispatch(fetchPostListSuccess(data));
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
      await postsApi.increasePostView(id!);

      if (res.data) {
        await dispatch(setUserType(res.data.userType!));

        await dispatch(fetchPostDataSuccess(res.data.post));
      }
    } catch (error: any) {
      console.log("🚀 ~ file: addEditThunk.ts:52 ~ error:", error);
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

// POST'S COMMENT
export const handleGetPostComment =
  (id: string, params: PaginationParams): AppThunk =>
  async (dispatch, getState) => {
    dispatch(fetchCommentList());
    try {
      const res = await commentApi.getComment(id, params);

      dispatch(fetchCommentListSuccess(res.data.data));
      dispatch(fetchPagination(res.data.pagination));
    } catch (error) {
      console.log(
        "🚀 ~ file: Comment.tsx:35 ~ handleGetPostComment ~ error",
        error
      );
    }
  };

// POST NEW COMMENT
export const handlePostComment =
  (id: string, comment: string): AppThunk =>
  async (dispatch, getState) => {
    const listComment: Comment[] = getState().post.commentList;
    const profile: Profile | null = getState().auth.userProfile;

    const isLoggedIn = getState().auth.isLoggedIn;

    if (!isLoggedIn) {
      toast("Please let us know who you are🤔", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const content = comment;

      try {
        const res = await commentApi.comment({ id, content });
        if (res.data) {
          const newListComment = await [...listComment];

          await newListComment.push({
            id: listComment[listComment.length - 1].id! + 1,
            content: comment,
            user: profile,
          });

          await dispatch(fetchCommentListSuccess(newListComment));

          toast("Your comment upload successfully 🥳", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(
          "🚀 ~ file: Comment.tsx:22 ~ handlePostComment ~ error",
          error
        );
      }
    }
  };

// USER'S POST
export const handleGetUserPost =
  (
    id: string | number,
    type: string,
    { page, limit }: PaginationParams
  ): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await postsApi.getUserPost(id, type, { page, limit });

      dispatch(fetchUserPostList(res.data.data));
      dispatch(fetchPagination(res.data.pagination!));
    } catch (error) {
      console.log(
        "🚀 ~ file: addEditThunk.ts:199 ~ handleGetUserPost ~ error:",
        error
      );
    }
  };
