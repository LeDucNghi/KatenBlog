import "./IconsListWidget.scss";

import * as React from "react";

import { IconsWidgets } from "../../constants/clusterWidgets";

export interface IIconsListWidgetProps {
  width: string;
  height: string;
}

export function IconsListWidget({ width, height }: IIconsListWidgetProps) {
  return (
    <ul
      className="icons_widget"
      style={{
        width: width,
        height: height,
      }}
    >
      {IconsWidgets.map((icons, key) => {
        return (
          <li className="icon_items" key={key}>
            <a href={icons.route}>{icons.icon}</a>
          </li>
        );
      })}
    </ul>
  );
}
