import "./Body.scss";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
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
              <BlogItems
                direction="vertical"
                isThumbedNail
                items={blogs}
                showBadge={false}
                key={key}
                size="small"
                style={{
                  margin: "0.5em 0",
                }}
                fontSize="13px"
              />
            );
          })}
        </div>

        <div className="side">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <BlogItems
                direction="vertical"
                isThumbedNail
                items={blogs}
                showBadge={false}
                key={key}
                size="small"
                style={{
                  margin: "0.5em 0",
                }}
                fontSize="13px"
              />
            );
          })}
        </div>
      </div>
    </RoundedWidget>
  );
}
