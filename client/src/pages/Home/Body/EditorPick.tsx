import "./Body.scss";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
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
              <BlogItems
                key={key}
                direction="vertical"
                showBadge={false}
                items={blogs}
                style={{
                  marginBottom: "1em",
                }}
                id={`${blogs.id}`}
              />
            );
          })}
        </div>

        <div className="side">
          {BlogsSample.slice(0, 4).map((blogs, key) => {
            return (
              <BlogItems
                key={key}
                direction="horizontal"
                shape="square"
                showBadge={false}
                items={blogs}
                fontSize="14px"
                id={`${blogs.id}`}
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
