import "./Post.scss";

import * as Yup from "yup";

import { Breadcrumbs, Link } from "@mui/material";
import { Form, Formik } from "formik";
import {
  addEditPost,
  handleGetDetailPost,
  handleGetPostComment,
  updateRecentBlog,
} from "../../features/addEditBlog/addEditThunk";
import {
  selectApiStatus,
  selectCommentList,
  selectFetchPostFailed,
  selectPaginate,
  selectPostData,
} from "../../features/addEditBlog/addEditSlice";
import {
  selectGetUserType,
  selectIsLoggedIn,
  setUserType,
} from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLocation, useParams } from "react-router-dom";

import { Author } from "../../features/addEditBlog/components/Author/Author";
import { BlogsSample } from "../../mock";
import { Comment } from "../../features/addEditBlog/components/Comment/Comment";
import { CommentList } from "../../features/addEditBlog/components/CommentList/CommentList";
import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import NotFound from "../../components/Common/NotFound/NotFound";
import { Page } from "../../widgets/DocTitle/DocTitle";
import { Post } from "../../models";
import { PostBanner } from "../../features/addEditBlog/components/Banner/PostBanner";
import { PostContent } from "../../features/addEditBlog/components/Content/PostContent";
import { PostHeader } from "../../features/addEditBlog/components/PostHeader/PostHeader";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";
import { useEffect } from "react";

export interface IPostsProps {
  data?: Post;
}

export default function Posts({ data }: IPostsProps) {
  const { id } = useParams<string>();
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const blogData = useAppSelector(selectPostData);
  const userType = useAppSelector(selectGetUserType);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isError = useAppSelector(selectFetchPostFailed);
  const commentList = useAppSelector(selectCommentList);
  const commentListPaginate = useAppSelector(selectPaginate);
  const apiStatus = useAppSelector(selectApiStatus);

  useEffect(() => {
    if (apiStatus === "Network Error") {
      const data = BlogsSample.find((blog) => blog.id === Number(id));

      dispatch(handleGetDetailPost(id!, data));

      if (pathname === "/add") {
        dispatch(setUserType("isAdd"));
      }
    } else if (pathname === "/add") {
      dispatch(setUserType("isAdd"));
    } else {
      dispatch(handleGetDetailPost(id!));
      dispatch(handleGetPostComment(id!, commentListPaginate));
    }
  }, [id, pathname, dispatch, apiStatus]);

  useEffect(() => {
    if (blogData && isLoggedIn) dispatch(updateRecentBlog(id!));
  }, [dispatch, blogData, isLoggedIn, id]);

  const initialValues: Post = {
    title: blogData ? blogData?.title : "",
    subTitle: blogData ? blogData?.subTitle : "",
    categories: blogData ? blogData?.categories : "",
    content: blogData ? blogData?.content : "",
    image: blogData ? blogData?.image : "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(1, "Title is too short")
      .required("Let us know your blog's title 🤔"),

    subTitle: Yup.string()
      .min(1, "Sub Title is too short")
      .max(100, "Sub Title is too long")
      .required("Let us know your blog's sub title 🤔"),

    categories: Yup.string().required("Let us know your blog's category 🤔"),

    content: Yup.string()
      .min(1, "Your content is too short")
      .required("Let us know your blog's content 🤔"),
  });

  if ((pathname !== `/add` && !blogData) || isError?.isError)
    return (
      <NotFound
        title="Sorry, blog not found"
        content={isError!.repsonse.data.message}
        secondaryButton
        secondButtonContent="Add a new one? 🤔"
        secondRoute="/add"
      />
    );

  return (
    <Page
      title={
        pathname === `/add` ? `Create your own blog` : `${blogData?.title}`
      }
    >
      <ScrollToTop />
      <div className="post_container">
        {pathname !== `/add` && (
          <Breadcrumbs className="post_breadcrumb" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={`/categories/${blogData?.categories}`}
            >
              {blogData?.categories}
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              {blogData?.title}
            </Link>
          </Breadcrumbs>
        )}

        <div
          className="post_single"
          style={{ width: userType === "isAdd" ? "100%" : "" }}
        >
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              dispatch(addEditPost(values, Number(id)))
            }
          >
            {(formikProps) => {
              const { values, handleChange, handleBlur, setFieldValue } =
                formikProps;

              return (
                <Form>
                  <PostHeader
                    pathname={pathname}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    userType={userType}
                    blogData={blogData}
                  />

                  <PostBanner
                    userType={userType}
                    values={values}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  />

                  <PostContent
                    setFieldValue={setFieldValue}
                    blogData={blogData}
                    userType={userType}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </Form>
              );
            }}
          </Formik>

          <Author userType={userType} author={blogData?.user} />

          {(userType === "isGuest" || userType === "isPoster") && (
            <CommentList commentList={commentList} id={`${id}`} />
          )}

          {userType === "isGuest" && <Comment id={`${id}`} />}

          {/* {(userType === "isGuest" || userType === "isPoster") && (
          <RelatedBlogs />
        )} */}
        </div>

        {userType !== "isAdd" && (
          <div className="post_right">
            <InnerWrapper />
          </div>
        )}
      </div>
    </Page>
  );
}
