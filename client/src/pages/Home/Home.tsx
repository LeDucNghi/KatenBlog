import * as React from "react";

import { Body } from "./Body";
import { CustomCarousel } from "../../components/Common/Carousel/Carousel";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <ScrollToTop />

      <CustomCarousel />

      <Body />
    </div>
  );
}
