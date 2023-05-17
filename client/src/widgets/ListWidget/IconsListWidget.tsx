import "./IconsListWidget.scss";

import * as React from "react";

import { IconName, IconsFontSize } from "../../models";

import { Icons } from "../../components/Common/Icons/Icons";
import { IconsWidgets } from "../../constants/clusterWidgets";

export interface IIconsListWidgetProps {
  style?: React.CSSProperties;
  color?: string;
}

export function IconsListWidget({ style, color }: IIconsListWidgetProps) {
  return (
    <ul className="icons_widget" style={style}>
      {IconsWidgets.map((icons, key) => {
        return (
          <li className="icon_items" key={key}>
            <a href={icons.route} rel="noreferrer noopener" target="_blank">
              <Icons
                iconName={`${icons.icon}` as IconName}
                className={`${icons.className}`}
                fontSize={`${icons.fontSize}` as IconsFontSize}
                style={{
                  color: color,
                }}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
