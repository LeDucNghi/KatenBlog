import "./AboutWidget.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";
import { Profile } from "../../models";

export interface IAboutWidgetProps {
  user: Profile;
}

export function AboutWidget({ user }: IAboutWidgetProps) {
  console.log("🚀 ~ file: AboutWidget.tsx:13 ~ AboutWidget ~ user:", user);
  return (
    <div className="about_widget">
      <h2 className="about about_author">{user?.fullname} </h2>

      <p className="about about_description">
        {user && user.description
          ? user?.description
          : "Hello, We’re content writer who is fascinated by content fashion,celebrity and lifestyle. We helps clients bring the right content to the right people."}
      </p>

      <ul className="about about_social_button">
        <li>
          <a
            href="https://www.facebook.com/nghile.genji/"
            rel="noreferrer noopener"
          >
            <Icons
              iconName="facebook"
              className="social_button_items"
              fontSize="small"
            />{" "}
          </a>
        </li>
        <li>
          <a href="https://github.com/LeDucNghi" rel="noreferrer noopener">
            <Icons
              iconName="github"
              className="social_button_items"
              fontSize="small"
            />{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dnn___2812/"
            rel="noreferrer noopener"
          >
            <Icons
              iconName="instagram"
              className="social_button_items"
              fontSize="small"
            />{" "}
          </a>
        </li>
        <li>
          <a href="/" rel="noreferrer noopener">
            <Icons
              iconName="pinterest"
              className="social_button_items"
              fontSize="small"
            />{" "}
          </a>
        </li>
        <li>
          <a href="/" rel="noreferrer noopener">
            <Icons
              iconName="youtube"
              className="social_button_items"
              fontSize="small"
            />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
