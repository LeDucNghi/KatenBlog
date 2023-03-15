import { Post, Profile } from "../../models";
import { getPostData, setPostingStatus } from "./addEditSlice";

import { AppThunk } from "../../app/store";
import postsApi from "../../api/postsApi";
import { setUserType } from "../auth/authSlice";

// get detail post
export const handleGetDetailPost =
  (id: string): AppThunk =>
  async (disptach, getState) => {
    const account = JSON.parse(localStorage.getItem("information")!) as Profile;

    const userType = getState().auth.userType;

    try {
      const res = await postsApi.getDetailPost(id!);

      if (res.data) {
        if (res.data.post.UserId === account.id) {
          await disptach(
            setUserType({
              ...userType,
              isPoster: true,
            })
          );
        } else if (!account || res.data.post.UserId !== account.id) {
          await disptach(
            setUserType({
              ...userType,
              isGuest: true,
            })
          );
        }

        await disptach(getPostData(res.data.post));
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: AddEditBlog.tsx:32 ~ handleGetDetailPost ~ error:",
        error
      );
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

    if (userType.isPoster) {
      await dispatch(setPostingStatus({ ...postingStatus, isEdit: true }));
    } else await dispatch(setPostingStatus({ ...postingStatus, isAdd: true }));

    const newName = `blog ${image?.name} `;

    const myNewFile = await new File([image!], newName);

    image = await myNewFile;

    // await setImage(image);

    const newValue = userType.isPoster
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
