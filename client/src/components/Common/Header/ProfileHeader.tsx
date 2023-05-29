import "./ProfileHeader.scss";

import { BREAK_POINTS_NUMBER, NavbarWidget } from "../../../constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface IProfileHeaderProps {
  image?: string;
  title?: string;
  slogan?: string;

  color?: string;

  onclick?: any;

  style?: React.CSSProperties;
}

export function ProfileHeader({
  image,
  title,
  slogan,
  color,
  onclick,
  style,
}: IProfileHeaderProps) {
  const { windowInnerWidth } = useWindowSize();
  const navigate = useNavigate();
  const { name } = useParams();

  const [active, setActive] = useState("Home");

  const handleActiveNavbar = (name: string, route: string) => {
    setActive(name);
    navigate(route);
  };

  return (
    <div className="profile_header" style={style}>
      <div className="top_header">
        <div className="top_header_main">
          {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
            <IconsListWidget
              style={{
                width: "20%",
              }}
              iconsSpace="0 0.5em"
            />
          )}

          <div className="main_user header_main_items">
            <div className="user_avatar">
              <img src={image ? image : Images.avatar} alt="" />
            </div>

            <h2 className="user_name" style={{ color: color }}>
              {title}{" "}
            </h2>

            <div className="user_slogan">
              {slogan
                ? slogan
                : "Discover new perspectives, one post at a time."}
            </div>
          </div>

          <ButtonsListWidget
            style={{
              width: windowInnerWidth < BREAK_POINTS_NUMBER.sm ? "90%" : "30%",
              justifyContent:
                windowInnerWidth < BREAK_POINTS_NUMBER.sm ? "center" : "",
              margin: windowInnerWidth < BREAK_POINTS_NUMBER.sm ? "1em 0" : 0,
            }}
            onclick={onclick}
          />
        </div>
      </div>

      {windowInnerWidth > BREAK_POINTS_NUMBER.md && (
        <div className="nav_header">
          {NavbarWidget.map((nav, key) => {
            return (
              <button
                key={key}
                // href={nav.route}
                onClick={() => handleActiveNavbar(nav.name, nav.route)}
                className={
                  active === nav.name ? "nav_items isActive" : "nav_items"
                }
                style={{ color: color }}
              >
                {nav.name}{" "}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
