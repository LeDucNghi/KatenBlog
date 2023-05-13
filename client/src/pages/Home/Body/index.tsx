import "./index.scss";

import { InnerWrapper } from "../../../widgets/InnerWrapper/InnerWrapper";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <div className="body_container">
      <div className="left_side">body left side</div>

      <div className="right_side">
        <InnerWrapper width="90%" />
      </div>
    </div>
  );
}
