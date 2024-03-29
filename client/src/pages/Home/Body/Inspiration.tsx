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
        {BlogsSample.slice(0, 2).map((blogs, key) => {
          return (
            <div className="side" key={key}>
              <BlogItems
                id={`${blogs.id}`}
                direction="vertical"
                isThumbedNail
                items={blogs}
                showBadge={false}
                size="small"
                style={{
                  margin: "0.5em 0",
                }}
                fontSize="11px"
              />
            </div>
          );
        })}
      </div>
    </RoundedWidget>
  );
}
