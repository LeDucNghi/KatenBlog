import "./UserProfile.scss";

import * as React from "react";

import { UserAbout } from "../../features/profile/components/UserAbout/UserAbout";
import { UserBlogList } from "../../features/profile/components/UserBlogList/UserBlogList";
import { highestList } from "../../mock";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <div className="profile_main_content">
      <div className="profile_container">
        <UserBlogList userBlogList={highestList} />

        <UserAbout />
      </div>
    </div>
  );
}
