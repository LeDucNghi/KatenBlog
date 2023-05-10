import "./Header.scss";

import {
  BREAK_POINTS_NUMBER,
  IconsWidgets,
  NavbarWidget,
} from "../../../constants";
import { IconName, IconsFontSize } from "../../../models";

import { Icons } from "../Icons/Icons";
import { Images } from "../../../constants/image";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface INavbarProps {
  open: boolean;
  setOpen: any;
}

export function Navbar({ open, setOpen }: INavbarProps) {
  const navigate = useNavigate();
  const { windowInnerWidth } = useWindowSize();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <nav className="header_navbar">
      <div className="navbar_container">
        <a href="/" className="navbar_brand">
          <img src={Images.logo} alt="" />
        </a>

        {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
          <div className="navbar_collapse">
            {NavbarWidget.map((items, key) => {
              return (
                <a href={items.route} className="nav_link" key={key}>
                  {items.name}
                </a>
              );
            })}
          </div>
        )}

        <div className="navbar_right">
          {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
            <ul className="navbar_icon">
              {IconsWidgets.map((icons, key) => {
                return (
                  <li className="nav_icon_items" key={key}>
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href={icons.route}
                    >
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
          )}

          <div className="navbar_buttons">
            <button className="icon_button">
              <Icons fontSize="medium" iconName="search" />
            </button>

            <button className="icon_button" onClick={() => setOpen(!open)}>
              <Icons fontSize="medium" iconName="burger" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
