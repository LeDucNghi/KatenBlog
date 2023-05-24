import "./ProfileHeader.scss";

import { BREAK_POINTS_NUMBER, NavbarWidget } from "../../../constants";

import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { CustomDrawer } from "../Drawer/Drawer";
import { HeaderDrawer } from "./Drawer";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { selectUserProfile } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface IProfileHeaderProps {}

export function ProfileHeader(props: IProfileHeaderProps) {
  const userProfile = useAppSelector(selectUserProfile);

  const { windowInnerWidth } = useWindowSize();

  const [open, setOpen] = useState<boolean>(false);

  const onclick = () => {
    setOpen(!open);
  };

  return (
    <section className="profile_section">
      <div className="section_blur"></div>
      <div className="profile_header">
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
                <img
                  src={
                    userProfile && userProfile.avatar
                      ? userProfile.avatar
                      : Images.avatar
                  }
                  alt=""
                />
              </div>

              <h2 className="user_name">
                {userProfile ? userProfile.fullname : "Katen"}{" "}
              </h2>

              <div className="user_slogan">
                Professional Writer & Personal Blogger
              </div>
            </div>

            <ButtonsListWidget
              style={{
                width:
                  windowInnerWidth < BREAK_POINTS_NUMBER.sm ? "90%" : "30%",
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
                <a
                  key={key}
                  href={nav.route}
                  className={nav.id === 1 ? "nav_items isActive" : "nav_items"}
                >
                  {nav.name}{" "}
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="profile_about">
        <h2>I'm {userProfile ? userProfile.fullname : "Katen"}.</h2>
        <p>
          Hello, I’m a content writer who is fascinated by content fashion,
          celebrity and lifestyle. She helps clients bring the right content to
          the right people.
        </p>
        <button>about me</button>
      </div>

      <div className="profile_foot">
        <img src={Images.wave} alt="" />
      </div>

      <CustomDrawer
        width={300}
        anchor="right"
        open={open}
        close={() => setOpen(!open)}
      >
        <HeaderDrawer />
      </CustomDrawer>
    </section>
  );
}
