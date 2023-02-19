import * as React from "react";

import { CustomCarousel } from "../../components/Common/Carousel/Carousel";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <div>
      <CustomCarousel />
    </div>
  );
}
