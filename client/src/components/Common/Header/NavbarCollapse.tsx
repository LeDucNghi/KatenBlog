import "./NavbarCollapse.scss";

import * as React from "react";

import { NavbarWidget, ProfileNavbarWidget } from "../../../constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export interface INavbarCollapseProps {
  style?: React.CSSProperties;
  type: (type: string) => any;
}

export function NavbarCollapse({ style, type }: INavbarCollapseProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();

  const [active, setActive] = React.useState<number>(1);
  const [activeType, setActiveType] = React.useState<string>("");

  React.useEffect(() => {
    if (pathname === `/profile/${id}`) {
      setActiveType("Lifestyle");
    } else {
      setActiveType("Home");
    }
  }, [pathname]);

  React.useEffect(() => {
    type(activeType);
  }, [activeType]);

  const handleActiveNavbar = (nav: {
    id?: number;
    name?: string;
    route?: string;
  }) => {
    setActive(nav.id!);

    setActiveType(nav.name!);

    if (pathname !== `/profile/${id}`) {
      navigate(nav.route!);
    }
  };

  return (
    <div className="navbar_collapse" style={style}>
      {pathname === `/profile/${id}`
        ? ProfileNavbarWidget.map((nav, key) => {
            return (
              <button
                key={key}
                onClick={() =>
                  handleActiveNavbar({ id: nav.id, name: nav.name })
                }
                className={active === nav.id ? "nav_link isActive" : "nav_link"}
              >
                {nav.name}
              </button>
            );
          })
        : NavbarWidget.map((nav, key) => {
            return (
              <button
                key={key}
                onClick={() =>
                  handleActiveNavbar({ id: nav.id, route: nav.route })
                }
                className={active === nav.id ? "nav_link isActive" : "nav_link"}
              >
                {nav.name}
              </button>
            );
          })}
    </div>
  );
}
