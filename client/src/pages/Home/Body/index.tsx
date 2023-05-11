import "./index.scss";

import * as React from "react";

import { Highlight } from "./Highlight/Highlight";
import { InnerWrapper } from "../../../widgets/InnerWrapper/InnerWrapper";
import { Other } from "./OtherCategories/OtherCategories";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <div className="body_container">
      {/* <Highlight /> */}

      {/* <Other /> */}

      <div className="left_side">body left side</div>

      <div className="right_side">
        <InnerWrapper width="90%" />
      </div>
    </div>
  );
}
