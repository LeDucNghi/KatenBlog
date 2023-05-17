import "./AboutWidget.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";
import { IconsListWidget } from "../ListWidget/IconsListWidget";
import { Profile } from "../../models";

export interface IAboutWidgetProps {
  user: Profile;
}

export function AboutWidget({ user }: IAboutWidgetProps) {
  return (
    <div className="about_widget">
      <h2 className="about about_author">{user?.fullname} </h2>

      <p className="about about_description">
        {user && user.description
          ? user?.description
          : "Hello, We’re content writer who is fascinated by content fashion,celebrity and lifestyle. We helps clients bring the right content to the right people."}
      </p>

      <IconsListWidget
        style={{
          width: "100%",
          height: "2em",
        }}
      />
    </div>
  );
}
