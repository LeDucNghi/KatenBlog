import { Footer } from "../components/Common/Footer/Footer";
import { Header } from "../components/Common/Header/Header";
import { InnerWrapper } from "../widgets/InnerWrapper/InnerWrapper";

export interface ILandingLayoutProps {
  children: JSX.Element;
}

export function LandingLayout({ children }: ILandingLayoutProps) {
  return (
    <>
      <Header />

      <div className="body_layout">{children}</div>

      <Footer />
    </>
  );
}
