import * as React from "react";

import { BlogsSample } from "../../../mock";
import { KatenBlogItems } from "../../../components/Common/BlogItems/KatenBlogItems";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";

export interface ILatestPostProps {}

export function LatestPost(props: ILatestPostProps) {
  return (
    <RoundedWidget
      title="Latest Post"
      isDivider
      anchorTitle="left"
      style={{ width: "100%" }}
    >
      {BlogsSample.slice(0, 4).map((blogs, key) => {
        return (
          <KatenBlogItems
            key={key}
            direction="horizontal"
            size="big"
            showBadge={false}
            items={blogs}
            isThumbedNail={false}
            style={{
              marginBottom: "1em",
            }}
          />
        );
      })}
    </RoundedWidget>
  );
}
