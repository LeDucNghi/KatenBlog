import * as React from "react";

import { AuthForm } from "../../features/auth/components/AuthForm";
import AuthPage from "../../components/Common/Auth/AuthPage";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  return (
    <AuthPage
      brandTitle="Subscribe to write interesting things"
      formTitle="Get started"
    >
      <AuthForm isSignin={false} />
    </AuthPage>
  );
}
