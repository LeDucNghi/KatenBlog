import { Body } from "./Body";
import { HomeBanner } from "../../components/Common/Banners/HomeBanner";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <ScrollToTop />

      <HomeBanner />

      {/* <CustomCarousel /> */}

      <Body />
    </div>
  );
}
