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
import authApi from "../../../api/authApi";
import { toast } from "react-toastify";
import { useState } from "react";

export interface ISignInFormProps {
  isSignin: boolean;
}

export function AuthForm({ isSignin }: ISignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: Profile, { setSubmitting }: any) => {
    try {
      var res;
      if (isSignin) {
        res = await authApi.signin(values);
      } else {
        res = await authApi.signup(values);
      }

      if (res.data) {
        if (isSignin) {
          localStorage.setItem("token", res.data.token!);
          localStorage.setItem("information", JSON.stringify(res.data));
        }

        await toast(`${res.data.message} success 🥳`, {
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
      }
    } catch (error: any) {
      if (error) {
        toast(`${error.response.data.message} 😢`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error.response.data.message);
      }
    }
  };

  const signInInitialValues: Profile = { name: "", password: "" };
  const signUpInitialValues: Profile = { name: "", password: "", fullname: "" };

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
      initialValues={isSignin ? signInInitialValues : signUpInitialValues}
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
                  autoFocus={true}
                  value={!isSignin ? values.fullname : ""}
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
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
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
              {isSignin ? "Don't have an account?" : "Already have an account?"}
              <Link
                variant="subtitle2"
                underline="hover"
                component={RouterLink}
                to={isSignin ? `/signup` : `/signin`}
              >
                {isSignin ? "Signup" : "Signin"}
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
