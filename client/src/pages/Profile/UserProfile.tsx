import "./UserProfile.scss";

import * as React from "react";

import {
  selectPaginate,
  selectUserPostList,
} from "../../features/addEditBlog/addEditSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import { ProfileBanner } from "../../components/Common/Banners/ProfileBanner";
import { UserBlogList } from "../../features/profile/components/UserBlogList/UserBlogList";
import { handleGetUserPost } from "../../features/addEditBlog/addEditThunk";
import { useParams } from "react-router-dom";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const paginate = useAppSelector(selectPaginate);
  const userBlogList = useAppSelector(selectUserPostList);

  React.useEffect(() => {
    dispatch(handleGetUserPost(id!, "popular", paginate));
  }, [id]);

  return (
    <>
      <ProfileBanner />

      <div className="profile_main_content">
        <div className="profile_container">
          <UserBlogList userBlogList={userBlogList} id={`${id}`} />

          <div className="profile_right">
            <InnerWrapper />
          </div>
        </div>
      </div>
    </>
  );
}
