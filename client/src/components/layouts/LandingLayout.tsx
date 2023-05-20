import { Footer } from "../Common/Footer/Footer";
import { Header } from "../Common/Header/Header";

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
