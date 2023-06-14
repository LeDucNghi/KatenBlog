import "./UserProfile.scss";

import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { InnerWrapper } from "../../widgets/InnerWrapper/InnerWrapper";
import { ProfileBanner } from "../../components/Common/Banners/ProfileBanner";
import { UserBlogList } from "../../features/profile/components/UserBlogList/UserBlogList";
import { handleGetUserPost } from "../../features/addEditBlog/addEditThunk";
import { selectPaginate } from "../../features/addEditBlog/addEditSlice";
import { useParams } from "react-router-dom";

export interface IUserProfileProps {}

export default function UserProfile(props: IUserProfileProps) {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const paginate = useAppSelector(selectPaginate);

  const [postListType, setPostListType] = React.useState("");

  React.useEffect(() => {
    if (!postListType) {
      setPostListType("Lifestyle");
    }
  }, [postListType]);

  React.useEffect(() => {
    dispatch(handleGetUserPost(id!, postListType, { ...paginate, limit: 8 }));
  }, [id, dispatch, paginate, postListType]);

  return (
    <>
      <ProfileBanner handleTypeChange={setPostListType} />

      <div className="profile_main_content">
        <div className="profile_container">
          <UserBlogList type={postListType} id={`${id}`} />

          {postListType !== "Contact" && (
            <div className="profile_right">
              <InnerWrapper />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
