import "./SignIn.scss";

import { AuthForm } from "../../features/auth/components/AuthForm";
import AuthPage from "../../components/Common/Auth/AuthPage";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  return (
    <AuthPage
      brandTitle="Hi, Welcome back"
      formTitle="Sign in to Zyro"
      formSubtitle="Enter your detail below."
    >
      <AuthForm isSignin={true} />
    </AuthPage>
  );
}
