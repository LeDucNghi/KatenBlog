import "./EditorPick.scss";

import * as React from "react";

import { BlogsSample } from "../../../mock";
import { KatenBlogItems } from "../../../components/Common/BlogItems/KatenBlogItems";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";

export interface IEditorPickProps {}

export function EditorPick(props: IEditorPickProps) {
  return (
    <RoundedWidget title="Editor's Pick" isDivider>
      <div className="container">
        <div className="left_side">
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

        <div className="right_side">
          {BlogsSample.slice(0, 3).map((blogs, key) => {
            return (
              <KatenBlogItems
                key={key}
                direction="horizontal"
                shape="square"
                showBadge={false}
                items={blogs}
                fontSize="13px"
                style={{
                  margin: "1em 0",
                }}
              />
            );
          })}
        </div>
      </div>
    </RoundedWidget>
  );
}
