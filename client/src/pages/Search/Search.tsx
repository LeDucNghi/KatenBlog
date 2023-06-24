import "./Search.scss";

import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { BlogsSample } from "../../mock";
import { Page } from "../../widgets/DocTitle/DocTitle";
import { ScrollToTop } from "../../components/Common/ScrollToTop/ScrollToTop";
import { SearchField } from "../../features/search/components/SearchField";
import { SearchList } from "../../features/search/components/SearchList";
import { handleGetAllPost } from "../../features/addEditBlog/addEditThunk";
import { selectPostList } from "../../features/addEditBlog/addEditSlice";

export interface ISearchSectionProps {}

export default function SearchSection(props: ISearchSectionProps) {
  const dispatch = useAppDispatch();

  const postList = useAppSelector(selectPostList);

  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    dispatch(handleGetAllPost());
  }, [dispatch]);

  return (
    <Page title="Katen. - Find your favourite blogs">
      <div className="search_container">
        <ScrollToTop />

        <SearchField setKeyWord={setKeyword} />

        <SearchList
          postList={postList.length > 0 ? postList : BlogsSample}
          keyword={`${keyword}`}
        />
      </div>
    </Page>
  );
}
