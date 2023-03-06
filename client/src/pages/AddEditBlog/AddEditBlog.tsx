import "./AddEdit.scss";

import * as Yup from "yup";

import { Form, Formik } from "formik";
import { Post, Profile } from "../../models";
import React, { useEffect, useState } from "react";

import { AddEditBanner } from "../../features/addEditBlog/components/Banner/AddEditBanner";
import { AddEditBody } from "../../features/addEditBlog/components/Body/AddEdtiBody";
import { RelatedBlogs } from "../../features/addEditBlog/components/Related/Related";
import postsApi from "../../api/postsApi";
import { useParams } from "react-router-dom";

export interface IAddEditBlogProps {
  check?: "isGuest" | "isPoster" | "isAdd";
}

export default function AddEditBlog({ check }: IAddEditBlogProps) {
  const { id } = useParams<string>();
  const account = JSON.parse(localStorage.getItem("information")!) as Profile;

  var [image, setImage] = useState<File>();
  var [userType, setUserType] = useState({
    isGuest: false,
    isPoster: false,
    isAdd: false,
  });
  var [blogData, setBlogData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    handleGetDetailPost();
  }, [id]);

  const handleGetDetailPost = async () => {
    await setIsLoading(true);
    try {
      const res = await postsApi.getDetailPost(id!);
      if (res.data) {
        if (res.data.post.UserId === account.id) {
          userType = await { ...userType, isPoster: true };
          await setUserType(userType);
        } else if (!account || res.data.post.UserId !== account.id) {
          userType = await { ...userType, isGuest: true };
          await setUserType(userType);
        }

        blogData = await res.data.post;
        await setBlogData(blogData);

        await setIsLoading(true);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: AddEditBlog.tsx:32 ~ handleGetDetailPost ~ error:",
        error
      );
    }
  };

  const handleSubmit = async (values: Post) => {
    const newName = `blog ${image?.name} `;

    const myNewFile = await new File([image!], newName);

    image = await myNewFile;

    await setImage(image);

    const newValue = { ...values, image: image };

    try {
      const res = await postsApi.addNewPost(newValue);
      console.log("🚀 ~ file: AddEditBlog.tsx:25 ~ handleSubmit ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const imageFile = (file: File) => {
    setImage(file);
  };

  const initialValues: Post = {
    title: "",
    subTitle: "",
    categories: "",
    content: "",
    image: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(1, "Title is too short")
      .max(30, "Title is too long")
      .required("Let us know your blog's title 🤔"),

    subTitle: Yup.string()
      .min(1, "Sub Title is too short")
      .max(30, "Sub Title is too long")
      .required("Let us know your blog's sub title 🤔"),

    categories: Yup.string().required("Let us know your blog's category 🤔"),

    content: Yup.string()
      .min(1, "Your content is too short")
      .required("Let us know your blog's content 🤔"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => handleSubmit(values)}
    >
      {(formikProps) => {
        const { values, handleChange, handleBlur, touched, errors } =
          formikProps;
        return (
          <Form className="addeditblog_container">
            <AddEditBanner
              blogData={blogData!}
              userType={userType}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              imageFile={imageFile}
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
            />

            <RelatedBlogs />
          </Form>
        );
      }}
    </Formik>
  );
}
