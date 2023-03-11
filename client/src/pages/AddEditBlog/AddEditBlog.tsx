import "./AddEdit.scss";

import * as Yup from "yup";

import { Form, Formik } from "formik";
import { Post, Profile } from "../../models";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { AddEditBanner } from "../../features/addEditBlog/components/Banner/AddEditBanner";
import { AddEditBody } from "../../features/addEditBlog/components/Body/AddEdtiBody";
import { Box } from "@mui/material";
import { Comment } from "../../features/addEditBlog/components/Comment/Comment";
import { CommentList } from "../../features/addEditBlog/components/CommentList/CommentList";
import { RelatedBlogs } from "../../features/addEditBlog/components/Related/Related";
import postsApi from "../../api/postsApi";
import { toast } from "react-toastify";

// import { AddEditBanner } from "../../features/addEditBlog/components/Banner/AddEditBanner";

export interface IAddEditBlogProps {
  check?: "isGuest" | "isPoster" | "isAdd";
}

export default function AddEditBlog({ check }: IAddEditBlogProps) {
  const { id } = useParams<string>();
  const { pathname } = useLocation();
  const account = JSON.parse(localStorage.getItem("information")!) as Profile;

  var [image, setImage] = useState<File>();
  var [userType, setUserType] = useState({
    isGuest: false,
    isPoster: false,
    isAdd: false,
  });
  var [blogData, setBlogData] = useState<Post>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/add") {
      setUserType({ ...userType, isAdd: true });
    } else {
      handleGetDetailPost();
    }
  }, [id, pathname]);

  const handleGetDetailPost = async () => {
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

        setIsLoading(true);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: AddEditBlog.tsx:32 ~ handleGetDetailPost ~ error:",
        error
      );
    }
  };

  const handleSubmit = async (values: Post) => {
    await setIsLoading(true);

    const newName = `blog ${image?.name} `;

    const myNewFile = await new File([image!], newName);

    image = await myNewFile;

    await setImage(image);

    const newValue = userType.isPoster
      ? { ...values, image: image, id: id }
      : { ...values, image: image };

    try {
      const res = userType.isPoster
        ? await postsApi.updatePost(newValue)
        : await postsApi.addNewPost(newValue);
      console.log("🚀 ~ file: AddEditBlog.tsx:25 ~ handleSubmit ~ res:", res);
      if (res) {
        toast.success(
          `🦄 ${userType.isPoster ? `Upload` : `Update`} post successful 🥳`,
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

        await setIsLoading(false);
      }
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const imageFile = (file: File) => {
    setImage(file);
  };

  const initialValues: Post = {
    title: `${userType.isPoster ? blogData?.title : ""}`,
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
  console.log(
    "🚀 ~ file: AddEditBlog.tsx:36 ~ AddEditBlog ~ userType:",
    userType
  );

  return (
    <Box className="addeditblog_container">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values)}
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
                isLoading={isLoading}
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
