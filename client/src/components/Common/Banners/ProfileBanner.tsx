import "./ProfileBanner.scss";

import * as React from "react";

import { CustomDrawer } from "../Drawer/Drawer";
import { HeaderDrawer } from "../Header/Drawer";
import { Images } from "../../../constants";
import { ProfileHeader } from "../Header/ProfileHeader";
import { selectUserProfile } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";

export interface IProfileBannerProps {}

export function ProfileBanner(props: IProfileBannerProps) {
  const userProfile = useAppSelector(selectUserProfile);

  const [open, setOpen] = React.useState<boolean>(false);

  const onclick = () => {
    setOpen(!open);
  };

  return (
    <section className="profile_section">
      <div className="section_blur"></div>
      <ProfileHeader
        image={userProfile?.avatar}
        title={userProfile?.fullname}
        slogan="Professional Writer & Personal Blogger"
        onclick={onclick}
      />

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
