import * as React from "react";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../../mock";

export interface IPopularPostsProps {}

export function PopularPosts(props: IPopularPostsProps) {
  return (
    <>
      {BlogsSample.slice(0, 3).map((blogs, key) => {
        return (
          <BlogItems
            key={key}
            direction="horizontal"
            shape="circle"
            items={blogs}
            showBadge={true}
            fontSize="15px"
            style={{
              margin: "1em 0",
              height: "6.5em",
            }}
            id={`${blogs.id}`}
          />
        );
      })}
    </>
  );
}
