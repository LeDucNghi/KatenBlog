import "./Body.scss";

import { EditorPick } from "../EditorPick/EditorPick";
import { InnerWrapper } from "../../../widgets/InnerWrapper/InnerWrapper";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <div className="body_container">
      <div className="left_side">
        <EditorPick />
      </div>

      <div className="right_side">
        <InnerWrapper width="90%" />
      </div>
    </div>
  );
}
