import "./UserAbout.scss";

import * as React from "react";

import { AboutWidget } from "../../../../widgets/AboutWidget/AboutWidget";
import { RoundedWidget } from "../../../../widgets/RoundedWidgets";

export interface IUserAboutProps {}

export function UserAbout(props: IUserAboutProps) {
  return (
    <div className="about_user">
      <RoundedWidget>
        <AboutWidget />
      </RoundedWidget>
    </div>
  );
}
