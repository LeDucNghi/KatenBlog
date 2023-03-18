import {
  fetchPostData,
  fetchPostDataFailed,
  fetchPostDataSuccess,
  setPostingStatus,
} from "./addEditSlice";

import { AppThunk } from "../../app/store";
import { Post } from "../../models";
import postsApi from "../../api/postsApi";
import { setUserType } from "../auth/authSlice";

// get detail post
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
      console.log(
        "🚀 ~ file: addEditThunk.ts:24 ~ error data message:",
        error.response.data
      );
      console.log(
        "🚀 ~ file: addEditThunk.ts:24 ~ error status:",
        error.response.status
      );

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

// add / edit post
export const addEditPost =
  (values: Post, id: string): AppThunk =>
  async (dispatch, getState) => {
    const userType = getState().auth.userType;
    const postingStatus = getState().post.isPosting;
    var image = getState().post.imageFile;
    console.log("🚀 ~ file: AddEditThunk.ts:67 ~ image:", image);

    if (userType === "isPoster") {
      await dispatch(setPostingStatus({ ...postingStatus, isEdit: true }));
    } else await dispatch(setPostingStatus({ ...postingStatus, isAdd: true }));

    const newName = `blog ${image?.name} `;

    const myNewFile = await new File([image!], newName);

    image = await myNewFile;

    // await setImage(image);

    const newValue =
      userType === "isPoster"
        ? { ...values, image: image ? image : values.image, id: id }
        : { ...values, image: image };
    console.log("🚀 ~ file: AddEditThunk.ts:81 ~ newValue:", newValue);

    // try {
    //   const res = userType.isPoster
    //     ? await postsApi.updatePost(newValue)
    //     : await postsApi.addNewPost(newValue);
    //   console.log("🚀 ~ file: AddEditBlog.tsx:25 ~ handleSubmit ~ res:", res);
    //   if (res) {
    //     toast.success(
    //       `🦄 ${userType.isPoster ? `Upload` : `Update`} post successful 🥳`,
    //       {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //       }
    //     );

    //     // await setIsLoading(false);
    //     if (userType.isPoster) {
    //       await dispatch(setPostingStatus({ ...postingStatus, isEdit: false }));
    //     } else
    //       await dispatch(setPostingStatus({ ...postingStatus, isAdd: false }));
    //   }
    // } catch (error) {
    //   console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    // }
  };
