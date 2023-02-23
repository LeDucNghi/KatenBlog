import "../../../pages/SignIn/SignIn.scss";

import * as Yup from "yup";

import { Box, Link, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import { LoadingButton } from "@mui/lab";
import { Profile } from "../../../models";
import { Link as RouterLink } from "react-router-dom";
import authApi from "../../../api/authApi";
import { toast } from "react-toastify";

export interface ISignInFormProps {
  isSignin: boolean;
}

export function AuthForm({ isSignin }: ISignInFormProps) {
  const handleSubmit = async (values: Profile, { setSubmitting }: any) => {
    try {
      const res = (await isSignin)
        ? authApi.signin(values)
        : authApi.signup(values);

      // localStorage.setItem("token",  res.token);

      await toast("Login success 🥳", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      await setSubmitting(false);
      // window.location.href = await "/home";
      // console.log("🚀 ~ file: SignIn.tsx:22 ~ handleSubmit ~ res", res.data);
      // if (res ) {
      // }
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const initialValues = { name: "", password: "", fullname: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Invalid name")
      .max(30, "Invalid name")
      .required("Please enter your username 🤔"),

    fullname: Yup.string()
      .min(1, "Invalid name")
      .max(30, "Invalid name")
      .required("Let us know your name 🤔"),

    password: Yup.string().required("Please enter your password 🤔"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) =>
        handleSubmit(values, { setSubmitting })
      }
    >
      {(formikProps) => {
        const {
          values,
          handleChange,
          handleBlur,
          touched,
          errors,
          isSubmitting,
          isValid,
          dirty,
        } = formikProps;
        return (
          <Form className="form">
            {!isSignin && (
              <Box className="signup_form">
                <TextField
                  className="form_input_field"
                  label="Full name"
                  variant="outlined"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fullname && Boolean(errors.fullname)}
                  helperText={touched.fullname && errors.fullname}
                />
              </Box>
            )}

            <TextField
              className="form_input_field"
              label="Username"
              variant="outlined"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              className="form_input_field"
              label="Password"
              variant="outlined"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Typography variant="h5">
              Don't have an account?{" "}
              <Link
                variant="subtitle2"
                underline="hover"
                component={RouterLink}
                to="/signup"
              >
                Signup
              </Link>
            </Typography>

            <LoadingButton
              disabled={!isValid || !dirty}
              className="form_button"
              variant="contained"
              type="submit"
              loading={isSubmitting}
            >
              {isSignin ? "Login" : "Signup"}
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}
