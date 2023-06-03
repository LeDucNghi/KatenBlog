import "./UserBlogList.scss";

import {
  selectPaginate,
  selectUserPostList,
} from "../../../addEditBlog/addEditSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import { Empty } from "../../../../components/Common/NotFound/Empty";
import { handleGetUserPost } from "../../../addEditBlog/addEditThunk";
import { useEffect } from "react";

export interface IUserBlogListProps {
  id: string;
  type: string;
}

export function UserBlogList({ id, type }: IUserBlogListProps) {
  const userBlogListPaginate = useAppSelector(selectPaginate);
  const userBlogList = useAppSelector(selectUserPostList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      handleGetUserPost(id, type, {
        page: 1,
        limit: userBlogListPaginate.limit,
      })
    );
  }, [type, id, dispatch]);

  const handlePageChange = (value: number) => {
    dispatch(
      handleGetUserPost(id, type, {
        page: value,
        limit: userBlogListPaginate.limit,
      })
    );
  };

  return (
    <div className="blog_list_wrapper">
      <div className="blog_list">
        {userBlogList.length === 0 ? (
          <Empty
            style={{
              margin: "0 auto",
            }}
            content="Not found any blog or this user has not shared any blog yet🤔"
          />
        ) : (
          userBlogList.map((blogs, key) => {
            return (
              <div className="blog_items" key={key}>
                <BlogItems
                  items={blogs}
                  direction="vertical"
                  isThumbedNail={false}
                  showBadge={false}
                  id={`${blogs.id}`}
                />
              </div>
            );
          })
        )}
      </div>

      {userBlogList.length !== 0 && (
        <div className="blog_list_paginate">
          <CustomPagination
            paginate={userBlogListPaginate}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
