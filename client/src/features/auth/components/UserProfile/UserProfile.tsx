import "./UserProfile.scss";

import * as React from "react";

import { images } from "../../../../constants/image";

export interface IUserProfileProps {}

export function UserProfile(props: IUserProfileProps) {
  return (
    <div className="profile">
      <img src={images.wave} alt="" />
    </div>
  );
}
