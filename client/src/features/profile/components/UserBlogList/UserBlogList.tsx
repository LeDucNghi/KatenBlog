import "./UserBlogList.scss";

import {
  selectIsFetchingPostList,
  selectPaginate,
  selectUserPostList,
} from "../../../addEditBlog/addEditSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { Contact } from "../../../../pages/Contact/Contact";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import { Empty } from "../../../../components/Common/NotFound/Empty";
import { Loading } from "../../../../components/Common/Loading/Loading";
import { handleGetUserPost } from "../../../addEditBlog/addEditThunk";
import { useEffect } from "react";

export interface IUserBlogListProps {
  id: string;
  type: string;
}

export function UserBlogList({ id, type }: IUserBlogListProps) {
  const dispatch = useAppDispatch();
  const userBlogListPaginate = useAppSelector(selectPaginate);
  const userBlogList = useAppSelector(selectUserPostList);
  const isLoading = useAppSelector(selectIsFetchingPostList);
  console.log(
    "🚀 ~ file: CategoriesList.tsx:25 ~ CategoriesList ~ isLoading:",
    isLoading.isCategory
  );

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
    <div
      className="blog_list_wrapper"
      style={{ width: type === "Contact" ? "100%" : "" }}
    >
      {type === "Contact" ? (
        <Contact hasBanner={false} />
      ) : isLoading.isCategory ? (
        <Loading />
      ) : (
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
      )}

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
