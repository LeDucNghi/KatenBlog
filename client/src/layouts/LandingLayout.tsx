import { useLocation, useParams } from "react-router-dom";

import { Footer } from "../components/Common/Footer/Footer";
import { Header } from "../components/Common/Header/Header";
import { InnerWrapper } from "../widgets/InnerWrapper/InnerWrapper";
import { ProfileHeader } from "../components/Common/Header/ProfileHeader";

export interface ILandingLayoutProps {
  children: JSX.Element;
}

export function LandingLayout({ children }: ILandingLayoutProps) {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      {id && pathname === `/profile/${id}` ? <ProfileHeader /> : <Header />}

      <div className="body_layout">{children}</div>

      <Footer />
    </>
  );
}
