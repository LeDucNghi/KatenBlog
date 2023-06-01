import { Body } from "./Body/Body";
import { HomeBanner } from "../../components/Common/Banners/HomeBanner";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";
import { getUserRecentBlog } from "../../features/addEditBlog/addEditThunk";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getUserRecentBlog())
  // }, [dispatch]);

  const fetchUserRecentBlog = (isActive: number) => {
    if (isActive === 2) dispatch(getUserRecentBlog());
  };

  return (
    <>
      <ScrollToTop />

      <HomeBanner handleFetchRecent={fetchUserRecentBlog} />

      <Body />
    </>
  );
}
