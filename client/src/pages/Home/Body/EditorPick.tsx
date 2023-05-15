import "./Body.scss";

import * as React from "react";

import { BlogsSample } from "../../../mock";
import { KatenBlogItems } from "../../../components/Common/BlogItems/KatenBlogItems";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";

export interface IEditorPickProps {}

export function EditorPick(props: IEditorPickProps) {
  return (
    <RoundedWidget
      title="Editor's Pick"
      anchorTitle="left"
      isDivider
      style={{ width: "100%" }}
    >
      <div className="child_container">
        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <KatenBlogItems
                key={key}
                direction="vertical"
                showBadge={false}
                items={blogs}
              />
            );
          })}
        </div>

        <div className="side">
          {BlogsSample.slice(0, 4).map((blogs, key) => {
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
                  height: "6.5em",
                }}
              />
            );
          })}
        </div>
      </div>
    </RoundedWidget>
  );
}
