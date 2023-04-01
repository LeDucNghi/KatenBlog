import "../../../pages/Search/Search.scss";

import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { Loading } from "../../../components/Common/Loading/Loading";
import Paper from "@mui/material/Paper";
import { Post } from "../../../models";
import { useNavigate } from "react-router-dom";

export interface ISearchListProps {
  keyword: string;
  postList: Post[];
}

export function SearchList({ keyword, postList }: ISearchListProps) {
  const navigate = useNavigate();

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
              <Paper elevation={8} key={key} className="search_list_items">
                <ListItemButton onClick={() => navigate(`/post/${items.id}`)}>
                  <div className="items_img">
                    <img src={items?.image as string} alt="" />
                  </div>

                  <div className="items_text">
                    <p className="items_categories">{items.categories} </p>
                    <h2 className="items_title">{items.title}</h2>
                    <p className="items_time">{items.createdAt} </p>
                    <p className="items_subtitle">{items.subTitle}</p>
                  </div>
                </ListItemButton>
              </Paper>
            );
          })
        )}
      </List>
    </div>
  );
}
