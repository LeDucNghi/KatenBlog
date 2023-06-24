import "../../../components/Common/Auth/AuthPage.scss";

import * as Yup from "yup";

import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";

import { LoadingButton } from "@mui/lab";
import { Profile } from "../../../models";
import { Link as RouterLink } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { handleAuthForm } from "../authThunk";
import { useAppDispatch } from "../../../app/hooks";
import { useState } from "react";

export interface ISignInFormProps {
  status: "isSignin" | "isSignup" | "withoutApi";
}

export function AuthForm({ status }: ISignInFormProps) {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const signInInitialValues: Profile = { username: "", password: "" };
  const signUpInitialValues: Profile = {
    username: "",
    password: "",
    fullname: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Invalid name")
      .max(30, "Invalid name")
      .required("Please enter your username 🤔"),

    password: Yup.string().required("Please enter your password 🤔"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={
        status === "isSignin" ? signInInitialValues : signUpInitialValues
      }
      validationSchema={validationSchema}
      onSubmit={(values) => dispatch(handleAuthForm(values, status))}
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
            {status === "isSignin" && (
              <Box className="signup_form">
                <TextField
                  className="form_input_field"
                  label="Full name"
                  variant="outlined"
                  name="fullname"
                  autoFocus={true}
                  value={status === "isSignin" ? values.fullname : ""}
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
              autoFocus={true}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />

            <TextField
              type={showPassword ? "text" : "password"}
              className="form_input_field"
              label="Password"
              variant="outlined"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="h5">
              {status === "isSignin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                variant="subtitle2"
                underline="hover"
                component={RouterLink}
                to={status === "isSignin" ? `/signup` : `/signin`}
              >
                {status === "isSignin" ? "Signup" : "Signin"}
              </Link>
            </Typography>

            <LoadingButton
              disabled={!isValid || !dirty}
              className="form_button"
              variant="contained"
              type="submit"
              loading={isSubmitting}
            >
              {status === "isSignin" ? "Login" : "Signup"}
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}
