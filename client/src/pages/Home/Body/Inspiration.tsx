import "./Body.scss";

import * as React from "react";

import { BlogsSample } from "../../../mock";
import { KatenBlogItems } from "../../../components/Common/BlogItems/KatenBlogItems";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";

export interface IInspirationProps {}

export function Inspiration(props: IInspirationProps) {
  return (
    <RoundedWidget
      title="Inspiration"
      isDivider
      anchorTitle="left"
      style={{
        width: "100%",
      }}
    >
      <div className="child_container">
        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <KatenBlogItems
                direction="vertical"
                isThumbedNail
                items={blogs}
                showBadge={false}
                key={key}
                size="small"
              />
            );
          })}
        </div>

        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <KatenBlogItems
                direction="vertical"
                isThumbedNail
                items={blogs}
                showBadge={false}
                key={key}
                size="small"
              />
            );
          })}
        </div>
      </div>
    </RoundedWidget>
  );
}
