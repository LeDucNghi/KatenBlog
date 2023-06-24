import "./Body.scss";

import * as React from "react";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
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
              <BlogItems
                id={`${blogs.id}`}
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

          {BlogsSample.slice(2, 4).map((blogs, key) => {
            return (
              <BlogItems
                id={`${blogs.id}`}
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
          {BlogsSample.slice(2, 3).map((blogs, key) => {
            return (
              <BlogItems
                id={`${blogs.id}`}
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

          {BlogsSample.slice(4, 6).map((blogs, key) => {
            return (
              <BlogItems
                id={`${blogs.id}`}
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
