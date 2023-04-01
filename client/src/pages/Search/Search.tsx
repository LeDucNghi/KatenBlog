import "./Search.scss";

import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

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
    <div className="search_container">
      <SearchField setKeyWord={setKeyword} />

      <SearchList postList={postList} keyword={`${keyword}`} />
    </div>
  );
}
