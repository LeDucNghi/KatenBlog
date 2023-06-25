import { AuthForm } from "../../features/auth/components/AuthForm";
import AuthPage from "../../components/Common/Auth/AuthPage";
import { Page } from "../../widgets/DocTitle/DocTitle";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  return (
    <Page title="Katen. - Always Connected">
      <AuthPage
        brandTitle="Hi, Welcome back"
        formTitle="Sign in to Zyro"
        formSubtitle="Enter your detail below."
      >
        <AuthForm isSignin />
      </AuthPage>
    </Page>
  );
}
