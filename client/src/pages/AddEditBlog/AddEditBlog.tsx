import * as Yup from "yup";

import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";

import { Post } from "../../models";
import postsApi from "../../api/postsApi";

export interface IAddEditBlogProps {}

export function AddEditBlog(props: IAddEditBlogProps) {
  const handleSubmit = async (values: Post) => {
    try {
      const res = await postsApi.addNewPost(values);
      console.log("🚀 ~ file: SignIn.tsx:22 ~ handleSubmit ~ res", res.data);
      // localStorage.setItem("token", res.)
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const initialValues = {
    title: "",
    subTitle: "",
    categories: "",
    content: "",
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
          <Form>
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />

            <TextField
              label="SubTitle"
              variant="outlined"
              name="subTitle"
              value={values.subTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.subTitle && Boolean(errors.subTitle)}
              helperText={touched.subTitle && errors.subTitle}
            />

            <TextField
              label="Categories"
              variant="outlined"
              name="categories"
              value={values.categories}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.categories && Boolean(errors.categories)}
              helperText={touched.categories && errors.categories}
            />

            <TextField
              label="Content"
              variant="outlined"
              name="content"
              value={values.content}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.content && Boolean(errors.content)}
              helperText={touched.content && errors.content}
            />

            <Button type="submit">Create new post</Button>
          </Form>
        );
      }}
    </Formik>
  );
}
