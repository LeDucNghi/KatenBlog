import "./Drawer.scss";

import { Images, navbarWidget } from "../../../constants";

import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { selectUserProfile } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface IHeaderDrawerProps {}

export function HeaderDrawer(props: IHeaderDrawerProps) {
  const { windowInnerWidth } = useWindowSize();
  const navigate = useNavigate();
  const userProfile = useAppSelector(selectUserProfile);

  const onclick = (name: string, route: string) => {
    if (name === "Logout") {
      localStorage.removeItem("token");

      window.location.href = "/";
    } else {
      navigate(route);
    }
  };

  return (
    <div className="header_drawer">
      <div className="drawer_logo drawer_items">
        <img src={Images.logo} alt="" />
      </div>

      <ul className="drawer_menu drawer_items">
        {navbarWidget(userProfile?.id, windowInnerWidth).map((nav, key) => {
          return (
            <li onClick={() => onclick(nav.name, nav.route)} key={key}>
              {nav.name}{" "}
            </li>
          );
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
