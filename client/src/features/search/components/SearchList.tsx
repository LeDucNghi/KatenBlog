import "../../../pages/Search/Search.scss";

import * as React from "react";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import List from "@mui/material/List";
import { Loading } from "../../../components/Common/Loading/Loading";
import { Post } from "../../../models";

export interface ISearchListProps {
  keyword: string;
  postList: Post[] | null;
}

export function SearchList({ keyword, postList }: ISearchListProps) {
  console.log(
    "🚀 ~ file: SearchList.tsx:16 ~ SearchList ~ postList:",
    postList
  );

  const [listPost, setListPost] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    handleSearchPost();
  }, [keyword]);

  React.useEffect(() => {
    setListPost(postList!);
  }, [postList]);

  const handleSearchPost = async () => {
    setIsLoading(true);

    let timer;

    const newPostList = postList?.filter((item) =>
      item.title?.includes(keyword)
    );

    clearTimeout(timer);

    timer = setTimeout(() => {
      setIsLoading(false);

      setListPost(newPostList!);
    }, 500);
  };

  return (
    <div className="search_body">
      <p className="search_list_count">{listPost?.length} Results</p>
      <List className="search_list_content">
        {isLoading ? (
          <Loading />
        ) : (
          listPost.map((blogs, key) => {
            return (
              <BlogItems
                key={key}
                items={blogs}
                direction="vertical"
                isThumbedNail={false}
                showBadge={false}
                id={`${blogs.id}`}
                style={{
                  maxWidth: "30%",
                  margin: "1em 0.5em",
                }}
              />
            );
          })
        )}
      </List>
    </div>
  );
}
