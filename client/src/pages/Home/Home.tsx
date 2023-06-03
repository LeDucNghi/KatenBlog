import { Body } from "./Body/Body";
import { HomeBanner } from "../../components/Common/Banners/HomeBanner";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";
import { fetchLatestPost } from "../../features/addEditBlog/addEditThunk";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLatestPost({ page: 1, limit: 4 }));
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />

      <HomeBanner />

      <Body />
    </>
  );
}
