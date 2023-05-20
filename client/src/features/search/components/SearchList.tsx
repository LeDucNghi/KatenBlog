import "../../../pages/Search/Search.scss";

import * as React from "react";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import List from "@mui/material/List";
import { Loading } from "../../../components/Common/Loading/Loading";
import { Post } from "../../../models";

export interface ISearchListProps {
  keyword: string;
  postList: Post[];
}

export function SearchList({ keyword, postList }: ISearchListProps) {
  const [listPost, setListPost] = React.useState(postList);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    handleSearchPost();
  }, [keyword]);

  const handleSearchPost = async () => {
    setIsLoading(true);

    let timer;

    const newPostList = postList?.filter((item) =>
      item.title?.includes(keyword)
    );

    clearTimeout(timer);

    timer = setTimeout(() => {
      setIsLoading(false);

      setListPost(newPostList);
    }, 500);
  };

  return (
    <div className="search_body">
      <p className="search_list_count">{listPost.length} Results</p>
      <List className="search_list_content">
        {isLoading ? (
          <Loading />
        ) : (
          listPost.map((items, key) => {
            return (
              <BlogItems
                direction="vertical"
                items={items}
                key={key}
                showBadge={false}
              />
            );
          })
        )}
      </List>
    </div>
  );
}
