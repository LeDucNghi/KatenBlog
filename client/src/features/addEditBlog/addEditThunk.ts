import { Post, PostListRes } from "../../models";
import {
  fetchPostData,
  fetchPostDataFailed,
  fetchPostDataSuccess,
  fetchPostList,
  fetchPostListSuccess,
  setPostingStatus,
} from "./addEditSlice";

import { AppThunk } from "../../app/store";
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
      console.log("🚀 ~ file: addEditThunk.ts:19 ~ res:", res.data);

      if (res.data) {
        await dispatch(setUserType(res.data.userType!));

        await dispatch(fetchPostDataSuccess(res.data.post));
      }
    } catch (error: any) {
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
