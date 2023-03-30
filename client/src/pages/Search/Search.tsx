import "./Search.scss";

import * as React from "react";

import { SearchField } from "../../features/search/components/SearchField";
import { SearchList } from "../../features/search/components/SearchList";

export interface ISearchSectionProps {}

export default function SearchSection(props: ISearchSectionProps) {
  return (
    <div className="search_container">
      <SearchField />

      <SearchList />
    </div>
  );
}
