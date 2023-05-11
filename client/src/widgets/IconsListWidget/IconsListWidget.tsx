import "./IconsListWidget.scss";

import * as React from "react";

import { IconName, IconsFontSize } from "../../models";

import { Icons } from "../../components/Common/Icons/Icons";
import { IconsWidgets } from "../../constants/clusterWidgets";

export interface IIconsListWidgetProps {
  width?: string;
  height?: string;
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
            <a href={icons.route}>
              <Icons
                iconName={`${icons.icon}` as IconName}
                className={`${icons.className}`}
                fontSize={`${icons.fontSize}` as IconsFontSize}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
