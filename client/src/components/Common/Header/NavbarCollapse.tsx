import "./NavbarCollapse.scss";

import * as React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { NavbarWidget } from "../../../constants";

export interface INavbarCollapseProps {
  style?: React.CSSProperties;
  type: (type: string) => any;
}

export function NavbarCollapse({ style, type }: INavbarCollapseProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  const [active, setActive] = React.useState("Home");

  const handleActiveNavbar = (name: string, route: string) => {
    setActive(name);

    type(name);

    if (pathname !== `/profile/${id}`) {
      navigate(route);
    }
  };

  return (
    <div className="navbar_collapse" style={style}>
      {NavbarWidget.map((nav, key) => {
        return (
          <button
            key={key}
            onClick={() => handleActiveNavbar(nav.name, nav.route)}
            className={active === nav.name ? "nav_link isActive" : "nav_link"}
          >
            {nav.name}
          </button>
        );
      })}
    </div>
  );
}
