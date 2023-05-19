import "./UserBlogList.scss";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import { Post } from "../../../../models";
import { handleGetUserPost } from "../../../addEditBlog/addEditThunk";
import { selectPaginate } from "../../../addEditBlog/addEditSlice";
import { useNavigate } from "react-router-dom";

export interface IUserBlogListProps {
  userBlogList: Post[];
  id: string;
}

export function UserBlogList({ userBlogList, id }: IUserBlogListProps) {
  const userBlogListPaginate = useAppSelector(selectPaginate);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlePageChange = (value: number) => {
    dispatch(
      handleGetUserPost(id, "popular", {
        page: value,
        limit: userBlogListPaginate.limit,
      })
    );
  };

  return (
    <div className="blog_list_wrapper">
      <div className="blog_list">
        {userBlogList.map((blogs, key) => {
          return (
            <div className="blog_items" key={key}>
              <BlogItems
                key={key}
                items={blogs}
                direction="vertical"
                isThumbedNail={false}
                showBadge={false}
                onclick={() => navigate(`/post/${blogs.id}`)}
              />
            </div>
          );
        })}
      </div>

      <div className="blog_list_paginate">
        <CustomPagination
          paginate={userBlogListPaginate}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
