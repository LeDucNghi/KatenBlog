import {
  ApiStatus,
  Comment,
  PaginationParams,
  Post,
  Profile,
} from "../../models";
import {
  checkApiStatus,
  fetchCategoryListSuccess,
  fetchCommentList,
  fetchCommentListSuccess,
  fetchLatestPosts,
  fetchPagination,
  fetchPopularPost,
  fetchPostData,
  fetchPostDataFailed,
  fetchPostDataSuccess,
  fetchPostList,
  fetchPostListSuccess,
  fetchUserPostList,
  fetchUserRecentBlog,
  fetchingCategoryBlog,
  fetchingRecentBlog,
  setPostingStatus,
} from "./addEditSlice";

import { AppThunk } from "../../app/store";
import commentApi from "../../api/commentApi";
import postsApi from "../../api/postsApi";
import { setUserType } from "../auth/authSlice";
import { toast } from "react-toastify";

// GET ALL POST
export const handleGetAllPost = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchPostList());
  try {
    const {
      data: { data },
    } = await postsApi.getAll();

    dispatch(fetchPostListSuccess(data));
  } catch (error: any) {
    console.log(
      "🚀 ~ file: addEditThunk.ts:19 ~ handleGetAllPost ~ error:",
      error
    );

    if (error.message === "Network Error") {
      dispatch(checkApiStatus("Network Error"));
    } else {
      dispatch(checkApiStatus("Available"));
    }
  }
};

// GET DETAIL POST
export const handleGetDetailPost =
  (id: string, data?: Post): AppThunk =>
  async (dispatch, getState) => {
    const apiStatus: ApiStatus = getState().post.apiStatus;

    const type = "isBlog";

    dispatch(fetchPostData());

    if (apiStatus === "Network Error") {
      console.log("🚀 ~ file: addEditThunk.ts:60 ~ data:", data);

      await dispatch(setUserType("isGuest"));

      await dispatch(fetchPostDataSuccess(data!));
    } else {
      try {
        const res = await postsApi.getDetailPost(id!, type);
        await postsApi.increasePostView(id!);

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
    }
  };

// GET POPULAR POSTS LIST
export const getPopularPostsList =
  (isUser: boolean, id?: string, params?: PaginationParams): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = isUser
        ? await postsApi.getUserPost(id!, "popular", {
            page: params!.page,
            limit: params!.limit,
          })
        : await postsApi.getPopularPosts();
      dispatch(fetchPopularPost(res.data.data));
    } catch (error) {
      console.log("🚀 ~ file: addEditThunk.ts:81 ~ error:", error);
    }
  };

// ADD / EDIT POST
export const addEditPost =
  (values: Post, id: string): AppThunk =>
  async (dispatch, getState) => {
    const userType = getState().auth.userType;
    const postingStatus = getState().post.isPosting;

    if (userType === "isPoster") {
      await dispatch(setPostingStatus({ ...postingStatus, isEdit: true }));
    } else await dispatch(setPostingStatus({ ...postingStatus, isAdd: true }));

    const newValue =
      userType === "isPoster" ? { ...values, id: id } : { ...values };

    try {
      const res =
        userType === "isPoster"
          ? await postsApi.updatePost(newValue)
          : await postsApi.addNewPost(newValue);
      if (res) {
        toast.success(
          `🦄 ${
            userType === "isPoster" ? `Update` : `Upload`
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
      await dispatch(setPostingStatus({ ...postingStatus, isEdit: false }));

      toast.error(` Something went wrong 🤔`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

// POST'S COMMENT
export const handleGetPostComment =
  (id: string, params: PaginationParams): AppThunk =>
  async (dispatch, getState) => {
    const userProfile: Profile | null = getState().auth.userProfile;

    dispatch(fetchCommentList());
    try {
      const res = await commentApi.getComment(id, params);

      const dataClone = [...res.data.data];

      const newData = dataClone.map((data) => {
        const index = data.likes?.findIndex(
          (like) => like.userId === userProfile?.id && data.id === id
        );

        if (index) {
          return { ...data, isLiked: true };
        } else {
          return { ...data, isLiked: false };
        }
      });

      dispatch(fetchCommentListSuccess(newData));
      dispatch(fetchPagination(res.data.pagination!));
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

          if (newListComment.length === 0) {
            await newListComment.unshift({
              id: "1",
              content: comment,
              user: profile,
            });
          } else {
            await newListComment.unshift({
              id: listComment[listComment.length - 1].id! + 1,
              content: comment,
              user: profile,
            });
          }

          await dispatch(fetchCommentListSuccess(newListComment));

          toast.success("Your comment upload successfully 🥳", {
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

        toast.error("Your comment can not be uploaded 😢", {
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
    dispatch(fetchingCategoryBlog());

    let time;

    try {
      const res = await postsApi.getUserPost(id, type, { page, limit });

      clearTimeout(time);

      time = setTimeout(() => {
        dispatch(fetchUserPostList(res.data.data));
        dispatch(fetchPagination(res.data.pagination!));
      }, 1000);
    } catch (error) {
      console.log(
        "🚀 ~ file: addEditThunk.ts:199 ~ handleGetUserPost ~ error:",
        error
      );
    }
  };

// FETCH POST BY CATEGORIES
export const fetchPostByCategory =
  (category: string, { page, limit }: PaginationParams): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await postsApi.getPostByCategories(category, { page, limit });

      dispatch(fetchCategoryListSuccess(res.data.data));
      dispatch(fetchPagination(res.data.pagination!));
    } catch (error) {
      console.log("🚀 ~ file: addEditThunk.ts:222 ~ error:", error);
    }
  };

// UPDATE RECENT BLOG
export const updateRecentBlog =
  (postId: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      await postsApi.updateRecentBlog(postId);
    } catch (error) {
      console.log("🚀 ~ file: addEditThunk.ts:237 ~ error:", error);
    }
  };

// GET USER RECENT BLOG
export const getUserRecentBlog = (): AppThunk => async (dispatch, getState) => {
  dispatch(fetchingRecentBlog());

  try {
    const res = await postsApi.getUserRecentBlog();

    dispatch(fetchUserRecentBlog(res.data.data));
  } catch (error) {
    console.log("🚀 ~ file: addEditThunk.ts:246 ~ error:", error);
  }
};

// FETCH LATEST POST
export const fetchLatestPost =
  ({ page, limit }: PaginationParams): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await postsApi.getLatestPost({ page, limit });

      dispatch(fetchLatestPosts(res.data.data));
      dispatch(fetchPagination(res.data.pagination!));
    } catch (error) {
      console.log("🚀 ~ file: addEditThunk.ts:246 ~ error:", error);
    }
  };

// LIKE COMMENT
export const handleLikeComment =
  (postId: string, commentId: string): AppThunk =>
  async (dispatch, getState) => {
    const commentList: Comment[] = getState().post.commentList;
    const userProfile: Profile | null = getState().auth.userProfile;

    try {
      const res = await commentApi.likeComment(postId, commentId);

      const newCommentList = commentList.map((list) => {
        if (list.id === commentId) {
          const index = list.likes?.findIndex(
            (like) =>
              like.commentId === commentId && like.userId === userProfile?.id
          );

          if (index! < 0) {
            var newLikeItems = null;

            newLikeItems = {
              id:
                list.likes?.length === 0
                  ? 1
                  : list.likes![list.likes!.length - 1].id! + 1,
              createdAt: `${new Date()}`,
              updatedAt: `${new Date()}`,
              commentId,
              postId: Number(postId),
              userId: Number(userProfile?.id),
            };

            return {
              ...list,
              likes: [...list.likes!, newLikeItems],
              isLiked: true,
            };
          } else {
            const filterLikeList = list.likes?.filter(
              (like) =>
                like.commentId === commentId && userProfile?.id !== like.userId
            );

            return {
              ...list,
              likes: filterLikeList,
              isLiked: false,
            };
          }
        } else {
          return list;
        }
      });

      dispatch(fetchCommentListSuccess(newCommentList));

      await toast.success(`${res.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log("🚀 ~ file: addEditThunk.ts:301 ~ error:", error);
      toast.error(`Something went wrong 😢`, {
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
  };

// DELETE COMMENT
export const handleDeleteComment =
  (commentId: string): AppThunk =>
  async (dispatch, getState) => {
    const commentList: Comment[] = getState().post.commentList;

    try {
      const res = await commentApi.deleteComment(commentId);

      if (res) {
        const commentListClone = await [...commentList];

        const newCommentList = await commentListClone.filter(
          (comment) => comment.id !== commentId
        );

        dispatch(fetchCommentListSuccess(newCommentList));

        toast.success(`${res.data.message}`, {
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
      console.log("🚀 ~ file: addEditThunk.ts:336 ~ error:", error);
      toast.error(`Something went wrong 😢`, {
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
  };
