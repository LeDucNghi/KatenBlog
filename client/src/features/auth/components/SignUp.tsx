import * as React from "react";

import authApi from "../../../api/authApi";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  const handleSignUp = async (values: any) => {
    try {
      const res = await authApi.signup;
    } catch (error: any) {
      console.log("🚀 ~ file: SignUp.tsx:13 ~ handleSignUp ~ error:", error);
    }
  };

  return <div></div>;
}
