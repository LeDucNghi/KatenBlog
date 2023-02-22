import * as React from "react";

import { Highlight } from "./Highlight/Highlight";
import { Other } from "./OtherCategories/OtherCategories";

export interface IBodyProps {}

export function Body(props: IBodyProps) {
  return (
    <>
      <Highlight />

      <Other />
    </>
  );
}
