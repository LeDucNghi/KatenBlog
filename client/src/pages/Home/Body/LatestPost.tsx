import * as React from "react";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
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
          <BlogItems
            key={key}
            direction="horizontal"
            size="big"
            showBadge={false}
            items={blogs}
            isThumbedNail={false}
            style={{
              marginBottom: "1em",
            }}
            fontSize="13px"
          />
        );
      })}
    </RoundedWidget>
  );
}
