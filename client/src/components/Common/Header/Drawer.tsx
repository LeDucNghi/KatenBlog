import "./Drawer.scss";

import * as React from "react";

import { Images, NavbarWidget } from "../../../constants";

import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";

export interface IHeaderDrawerProps {}

export function HeaderDrawer(props: IHeaderDrawerProps) {
  return (
    <div className="header_drawer">
      <div className="drawer_logo drawer_items">
        <img src={Images.logo} alt="" />
      </div>

      <ul className="drawer_menu drawer_items">
        {NavbarWidget.map((nav, key) => {
          return <li key={key}>{nav.name} </li>;
        })}
      </ul>

      <IconsListWidget
        style={{
          width: "90%",
        }}
        iconsSpace="0 0.5em"
      />
    </div>
  );
}
