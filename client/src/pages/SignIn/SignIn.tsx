import * as Yup from "yup";

import { Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";

import { Profile } from "../../models";
import authApi from "../../api/authApi";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  const handleSubmit = async (values: Profile) => {
    try {
      const res = await authApi.signin(values);
      console.log("🚀 ~ file: SignIn.tsx:22 ~ handleSubmit ~ res", res.data);
    } catch (error) {
      console.log("🚀 ~ file: SignIn.tsx:20 ~ handleSubmit ~ error", error);
    }
  };

  const initialValues = { name: "", password: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Invalid name")
      .max(30, "Invalid name")
      .required("Let us know your name 🤔"),

    password: Yup.string().required("Please enter your password 🤔"),
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
              // id="outlined-basic"
              label="username"
              variant="outlined"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              // id="outlined-basic"
              label="password"
              variant="outlined"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button type="submit">Login</Button>
          </Form>
        );
      }}
    </Formik>
  );
}
