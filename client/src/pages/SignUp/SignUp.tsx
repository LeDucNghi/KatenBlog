import * as React from "react";

import { AuthForm } from "../../features/auth/components/AuthForm";
import AuthPage from "../../components/Common/Auth/AuthPage";
import { Page } from "../../widgets/DocTitle/DocTitle";

export interface ISignUpProps {}

export function SignUp(props: ISignUpProps) {
  return (
    <Page title="Katen. - Become a blogger">
      <AuthPage
        brandTitle="Subscribe to write interesting things"
        formTitle="Get started"
      >
        <AuthForm status="isSignup" />
      </AuthPage>
    </Page>
  );
}
