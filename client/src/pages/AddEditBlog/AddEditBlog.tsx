import "./AddEdit.scss";

import * as Yup from "yup";

import { Form, Formik } from "formik";
import {
  addEditPost,
  handleGetDetailPost,
} from "../../features/addEditBlog/addEditThunk";
import { selectGetUserType, setUserType } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { AddEditBanner } from "../../features/addEditBlog/components/Banner/AddEditBanner";
import { AddEditBody } from "../../features/addEditBlog/components/Body/AddEdtiBody";
import { Box } from "@mui/material";
import { Comment } from "../../features/addEditBlog/components/Comment/Comment";
import { CommentList } from "../../features/addEditBlog/components/CommentList/CommentList";
import { Post } from "../../models";
import { RelatedBlogs } from "../../features/addEditBlog/components/Related/Related";
import { selectPostData } from "../../features/addEditBlog/addEditSlice";

export interface IAddEditBlogProps {
  check?: "isGuest" | "isPoster" | "isAdd";
}

export default function AddEditBlog({ check }: IAddEditBlogProps) {
  const { id } = useParams<string>();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const blogData = useAppSelector(selectPostData);
  const userType = useAppSelector(selectGetUserType);

  // var [image, setImage] = useState<File>();
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/add") {
      dispatch(setUserType({ ...userType, isAdd: true }));
    } else {
      dispatch(handleGetDetailPost(id!));
    }
  }, [id, pathname]);

  const initialValues: Post = {
    title: userType.isPoster ? blogData?.title : "",
    subTitle: userType.isPoster ? blogData?.subTitle : "",
    categories: userType.isPoster ? blogData?.categories : "",
    content: userType.isPoster ? blogData?.content : "",
    image: userType.isPoster ? blogData?.image : "",
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

  return (
    <Box className="addeditblog_container">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => dispatch(addEditPost(values, id!))}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur, touched, errors } =
            formikProps;

          return (
            <Form>
              <AddEditBanner
                blogData={blogData!}
                userType={userType}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                // imageFile={imageFile}
                touched={touched}
                errors={errors}
              />

              <AddEditBody
                blogData={blogData!}
                userType={userType}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                // isLoading={isLoading}
              />
            </Form>
          );
        }}
      </Formik>

      {(userType.isGuest || userType.isPoster) && <CommentList id={`${id}`} />}
      {userType.isGuest && <Comment id={`${id}`} />}
      {(userType.isGuest || userType.isPoster) && <RelatedBlogs />}
    </Box>
  );
}
