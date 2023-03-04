import "./AddEdit.scss";

import * as Yup from "yup";

import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";

import { AddEditBanner } from "../../features/addEditBlog/components/Banner/AddEditBanner";
import DropFileInput from "../../features/addEditBlog/components/DropDragImage/DropFileInput";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { RelatedBlogs } from "../../features/addEditBlog/components/Related/Related";
import TwitterIcon from "@mui/icons-material/Twitter";
import postsApi from "../../api/postsApi";

export interface IAddEditBlogProps {}

export function AddEditBlog(props: IAddEditBlogProps) {
  var [image, setImage] = useState<File>();

  const handleSubmit = async (values: any) => {
    const newName = `blog ${image?.name} `;

    const myNewFile = await new File([image!], newName);

    image = await myNewFile;

    await setImage(image);

    const newValue = { ...values, image: image };

    try {
      // const res = await postsApi.addNewPost(values);
      const res = await postsApi.addNewPost(newValue);
      console.log("🚀 ~ file: AddEditBlog.tsx:25 ~ handleSubmit ~ res:", res);
      // console.log("🚀 ~ file: SignIn.tsx:22 ~ handleSubmit ~ res", res.data);
      // localStorage.setItem("token", res.)
      // localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const selectedFile = files as FileList;

    setImage(selectedFile?.[0]);
  };

  const handleFileChange = (file: File) => {
    console.log(
      "🚀 ~ file: AddEditBlog.tsx:49 ~ handleFileChange ~ file:",
      file
    );
  };

  const initialValues = {
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
            <AddEditBanner />

            <Box className="addeditblog_body">
              <Box className="addeditblog_share_social">
                <Typography>Share</Typography>
                <Button className="social_button" variant="outlined">
                  <FacebookIcon />
                </Button>
                <Button className="social_button" variant="outlined">
                  <TwitterIcon />
                </Button>
                <Button className="social_button" variant="outlined">
                  <PinterestIcon />
                </Button>
              </Box>

              <Box className="addedit_form">
                {/* <TextField
                className="addedit_input_field"
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
                className="addedit_input_field"
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
                className="addedit_input_field"
                label="Categories"
                variant="outlined"
                name="categories"
                value={values.categories}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.categories && Boolean(errors.categories)}
                helperText={touched.categories && errors.categories}
              /> */}

                <TextField
                  className="addedit_input_field"
                  label="Content"
                  variant="outlined"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.content && Boolean(errors.content)}
                  helperText={touched.content && errors.content}
                  multiline
                  rows={10}
                  // maxRows={50}
                />

                {/* <DropFileInput onFileChange={handleFileChange} /> */}

                {/* <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  // value={values.image}
                  name="image"
                  onChange={(e) => handleChangeImage(e)}
                  hidden
                  accept="image/*"
                  type="file"
                />
                <PhotoCamera />
              </IconButton> */}

                <Button
                  className="addedit_form_button"
                  variant="contained"
                  type="submit"
                >
                  Create new post
                </Button>
              </Box>

              <Box className="addeditblog_advertise">
                <Paper elevation={5} className="advertise_container">
                  <div className="advertise_img">
                    <img
                      src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                      alt=""
                    />
                  </div>

                  <Typography className="advertise_title" variant="h3">
                    Subscribe to Newsletter
                  </Typography>

                  <Typography className="advertise_subtitle" variant="h4">
                    Far far away behind the word mountains far from.
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    label="Enter email"
                    variant="outlined"
                  />

                  <Button className="advertise_button" type="button">
                    Subscribe
                  </Button>
                </Paper>
              </Box>
            </Box>

            <RelatedBlogs />
          </Form>
        );
      }}
    </Formik>
  );
}
