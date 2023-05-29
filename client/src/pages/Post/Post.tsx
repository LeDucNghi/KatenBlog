import "./Post.scss";

import * as Yup from "yup";

import { Breadcrumbs, Link } from "@mui/material";
import { Form, Formik } from "formik";
import {
  addEditPost,
  handleGetDetailPost,
  handleGetPostComment,
} from "../../features/addEditBlog/addEditThunk";
import {
  selectCommentList,
  selectFetchPostFailed,
  selectPaginate,
  selectPostData,
} from "../../features/addEditBlog/addEditSlice";
import { selectGetUserType, setUserType } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLocation, useParams } from "react-router-dom";

import { Author } from "../../features/addEditBlog/components/Author/Author";
import { Comment } from "../../features/addEditBlog/components/Comment/Comment";
import { CommentList } from "../../features/addEditBlog/components/CommentList/CommentList";
import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import NotFound from "../../components/Common/NotFound/NotFound";
import { Post } from "../../models";
import { PostBanner } from "../../features/addEditBlog/components/Banner/PostBanner";
import { PostContent } from "../../features/addEditBlog/components/Content/PostContent";
import { PostHeader } from "../../features/addEditBlog/components/PostHeader/PostHeader";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";
import { useEffect } from "react";

export interface IPostsProps {
  check?: "isGuest" | "isPoster" | "isAdd";
}

export default function Posts({ check }: IPostsProps) {
  const { id } = useParams<string>();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const blogData = useAppSelector(selectPostData);
  const userType = useAppSelector(selectGetUserType);
  const isError = useAppSelector(selectFetchPostFailed);
  const commentList = useAppSelector(selectCommentList);
  const commentListPaginate = useAppSelector(selectPaginate);

  useEffect(() => {
    if (pathname === "/add") {
      dispatch(setUserType("isAdd"));
    } else {
      dispatch(handleGetDetailPost(id!));
      dispatch(handleGetPostComment(id!, commentListPaginate));

      if (userType === "isPoster") console.log();
    }
  }, [id, pathname]);

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

  if (isError?.isError)
    return (
      <NotFound
        title="Sorry, blog not found"
        content={`Sorry, we couldn’t find the blog you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.`}
      />
    );

  return (
    <div className="post_container">
      <ScrollToTop />

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

      <div className="post_single">
        <PostHeader blogData={blogData} />

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => dispatch(addEditPost(values, id!))}
        >
          {(formikProps) => {
            const {
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              setFieldValue,
            } = formikProps;

            return (
              <Form>
                <PostBanner
                  blogData={blogData}
                  userType={userType}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
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

        <Author author={blogData?.user} />

        {(userType === "isGuest" || userType === "isPoster") && (
          <CommentList commentList={commentList} id={`${id}`} />
        )}

        {userType === "isGuest" && <Comment id={`${id}`} />}

        {/* {(userType === "isGuest" || userType === "isPoster") && (
          <RelatedBlogs />
        )} */}
      </div>

      <div className="post_right">
        <InnerWrapper />
      </div>
    </div>
  );
}
