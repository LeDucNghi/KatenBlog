import "./UserBlogList.scss";

import * as React from "react";

import { KatenBlogItems } from "../../../../components/Common/BlogItems/KatenBlogItems";
import { Post } from "../../../../models";

export interface IUserBlogListProps {
  userBlogList: Post[];
}

export function UserBlogList({ userBlogList }: IUserBlogListProps) {
  return (
    <div className="blog_list">
      {userBlogList.map((blogs, key) => {
        return (
          <div className="blog_items" key={key}>
            <KatenBlogItems
              items={blogs}
              direction="vertical"
              isThumbedNail={false}
              showBadge={false}
            />
          </div>
        );
      })}
    </div>
  );
}
