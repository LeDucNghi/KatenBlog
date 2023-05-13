import * as React from "react";

import { BlogsSample } from "../../../../mock";
import { KatenBlogItems } from "../../../../components/Common/BlogItems/KatenBlogItems";

export interface IPopularPostsProps {}

export function PopularPosts(props: IPopularPostsProps) {
  return (
    <>
      {BlogsSample.slice(0, 3).map((items, key) => {
        return (
          <KatenBlogItems
            key={key}
            direction="horizontal"
            shape="circle"
            items={items}
            showBadge={true}
            style={{
              margin: "1em 0",
            }}
            fontSize="15px"
          />
        );
      })}
    </>
  );
}
