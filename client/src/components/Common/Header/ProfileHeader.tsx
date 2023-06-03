import "./ProfileHeader.scss";

import { useEffect, useState } from "react";

import { BREAK_POINTS_NUMBER } from "../../../constants";
import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { NavbarCollapse } from "./NavbarCollapse";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface IProfileHeaderProps {
  image?: string;
  title?: string;
  slogan?: string;

  color?: string;

  onclick?: any;

  style?: React.CSSProperties;

  handleTypeChange: (type: string) => any;
}

export function ProfileHeader({
  image,
  title,
  slogan,
  color,
  onclick,
  style,
  handleTypeChange,
}: IProfileHeaderProps) {
  const { windowInnerWidth } = useWindowSize();

  const [type, setType] = useState("");

  useEffect(() => {
    handleTypeChange(type);
  }, [type]);

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
        <NavbarCollapse type={setType} />
      )}
    </div>
  );
}
