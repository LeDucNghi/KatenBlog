import { Body } from "./Body/Body";
import { HomeBanner } from "../../components/Common/Banners/HomeBanner/HomeBanner";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div>
      <ScrollToTop />

      <HomeBanner />

      <Body />
    </div>
  );
}
