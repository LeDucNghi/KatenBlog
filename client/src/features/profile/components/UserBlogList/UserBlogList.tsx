import "./UserBlogList.scss";

import * as React from "react";

import { BlogsSample } from "../../../../mock";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import { KatenBlogItems } from "../../../../components/Common/BlogItems/KatenBlogItems";
import { Post } from "../../../../models";

export interface IUserBlogListProps {
  userBlogList: Post[];
}

export function UserBlogList({ userBlogList }: IUserBlogListProps) {
  return (
    <div className="blog_list">
      {BlogsSample.map((blogs, key) => {
        return (
          <div className="blog_items" key={key}>
            <KatenBlogItems
              key={key}
              items={blogs}
              direction="vertical"
              isThumbedNail={false}
              showBadge={false}
            />
          </div>
        );
      })}

      {/* <CustomPagination /> */}
    </div>
  );
}
