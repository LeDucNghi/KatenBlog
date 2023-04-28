import "./AboutWidget.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";

export interface IAboutWidgetProps {}

export function AboutWidget(props: IAboutWidgetProps) {
  return (
    <div className="about_widget">
      <h2 className="about about_author">Katen</h2>

      <p className="about about_description">
        Hello, We’re content writer who is fascinated by content fashion,
        celebrity and lifestyle. We helps clients bring the right content to the
        right people.
      </p>

      <ul className="about about_social_button">
        <li>
          <Icons
            iconName="facebook"
            className="social_button_items"
            fontSize="small"
          />{" "}
        </li>
        <li>
          <Icons
            iconName="twitter"
            className="social_button_items"
            fontSize="small"
          />{" "}
        </li>
        <li>
          <Icons
            iconName="instagram"
            className="social_button_items"
            fontSize="small"
          />{" "}
        </li>
        <li>
          <Icons
            iconName="pinterest"
            className="social_button_items"
            fontSize="small"
          />{" "}
        </li>
        <li>
          <Icons
            iconName="youtube"
            className="social_button_items"
            fontSize="small"
          />{" "}
        </li>
      </ul>
    </div>
  );
}
