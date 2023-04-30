import "./UserAbout.scss";

import * as React from "react";

import { AboutWidget } from "../../../../widgets/AboutWidget/AboutWidget";
import { RoundedWidget } from "../../../../widgets/RoundedWidgets";
import { selectUserProfile } from "../../../auth/authSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IUserAboutProps {}

export function UserAbout(props: IUserAboutProps) {
  const userProfile = useAppSelector(selectUserProfile);

  return (
    <div className="about_user">
      <RoundedWidget>
        <AboutWidget user={userProfile!} />
      </RoundedWidget>
    </div>
  );
}
