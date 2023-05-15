import "./Body.scss";

import * as React from "react";

import { BlogsSample } from "../../../mock";
import { KatenBlogItems } from "../../../components/Common/BlogItems/KatenBlogItems";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";

export interface ITrendingProps {}

export function Trending(props: ITrendingProps) {
  return (
    <RoundedWidget
      title="Trending"
      anchorTitle="left"
      isDivider
      style={{ width: "100%" }}
    >
      <div className="child_container">
        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <KatenBlogItems
                direction="vertical"
                items={blogs}
                showBadge={false}
                key={key}
                style={{
                  marginBottom: "1em",
                }}
              />
            );
          })}

          {BlogsSample.slice(0, 2).map((blogs, key) => {
            return (
              <KatenBlogItems
                key={key}
                direction="horizontal"
                shape="square"
                showBadge={false}
                items={blogs}
                fontSize="14px"
                style={{
                  marginBottom: "1em",
                  height: "7em",
                }}
              />
            );
          })}
        </div>

        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <KatenBlogItems
                direction="vertical"
                items={blogs}
                showBadge={false}
                key={key}
                style={{
                  marginBottom: "1em",
                }}
              />
            );
          })}

          {BlogsSample.slice(0, 2).map((blogs, key) => {
            return (
              <KatenBlogItems
                key={key}
                direction="horizontal"
                shape="square"
                showBadge={false}
                items={blogs}
                fontSize="14px"
                style={{
                  marginBottom: "1em",
                  height: "7em",
                }}
              />
            );
          })}
        </div>
      </div>
    </RoundedWidget>
  );
}
