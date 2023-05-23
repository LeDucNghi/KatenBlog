import "./Body.scss";

import { EditorPick } from "./EditorPick";
import { InnerWrapper } from "../../../widgets/InnerWrapper/InnerWrapper";
import { Inspiration } from "./Inspiration";
import { LatestPost } from "./LatestPost";
import { Trending } from "./Trending";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <div className="body_container">
      <div className="left_side">
        <EditorPick />
        <Trending />
        <Inspiration />
        <LatestPost />
      </div>

      <div className="right_side">
        <InnerWrapper width="100%" />
      </div>
    </div>
  );
}
