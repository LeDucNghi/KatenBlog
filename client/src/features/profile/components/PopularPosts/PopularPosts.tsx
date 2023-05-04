import * as React from "react";

import { KatenBlogItems } from "../../../../components/Common/BlogItems/KatenBlogItems";
import { highestList } from "../../../../mock";

export interface IPopularPostsProps {}

export function PopularPosts(props: IPopularPostsProps) {
  return (
    <>
      {highestList.slice(0, 3).map((items, key) => {
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
          />
        );
      })}
    </>
  );
}
