import * as React from "react";

import { Body } from "./Body";
import { CustomCarousel } from "../../components/Common/Carousel/Carousel";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <CustomCarousel />

      <Body />
    </div>
  );
}
