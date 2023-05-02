import "./UserAbout.scss";

import * as React from "react";

import { AboutWidget } from "../../../../widgets/AboutWidget/AboutWidget";
import { PopularPosts } from "../PopularPosts/PopularPosts";
import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import { selectUserProfile } from "../../../auth/authSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IUserAboutProps {}

export function UserAbout(props: IUserAboutProps) {
  const userProfile = useAppSelector(selectUserProfile);
  console.log(
    "🚀 ~ file: UserAbout.tsx:14 ~ UserAbout ~ userProfile:",
    userProfile
  );

  return (
    <div className="about_user">
      <RoundedWidget>
        <AboutWidget user={userProfile!} />
      </RoundedWidget>

      <RoundedWidget title="Popular Posts">
        <PopularPosts />
      </RoundedWidget>
    </div>
  );
}
