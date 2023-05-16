import "./UserProfile.scss";

import * as React from "react";

import { BlogsSample } from "../../mock";
import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import { UserBlogList } from "../../features/profile/components/UserBlogList/UserBlogList";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  return (
    <div className="profile_main_content">
      <div className="profile_container">
        <UserBlogList userBlogList={BlogsSample} />

        <InnerWrapper width="30%" />
      </div>
    </div>
  );
}
