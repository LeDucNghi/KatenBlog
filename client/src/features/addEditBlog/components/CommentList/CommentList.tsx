import "./CommentList.scss";

import * as React from "react";

import { Paper, Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { comments } from "../../../../mock";

export interface ICommentListProps {
  id: string;
}

export function CommentList({ id }: ICommentListProps) {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  // const [commentList, setCommentList] = React.useState<comments[]>();

  const handleLikePost = () => {
    setIsLiked(!isLiked);
    // try {

    // } catch (error) {

    // }
  };

  return (
    <div className="comment_list_container">
      <Typography className="comment_list_title">
        {comments.length < 10 ? `0${comments.length}` : `${comments.length}`}{" "}
        Comments
      </Typography>

      <List dense={false}>
        {comments.map((items, key) => {
          return (
            <Paper key={key} elevation={5} className="comment_items">
              <ListItem
                secondaryAction={
                  <>
                    <IconButton
                      onClick={handleLikePost}
                      edge="end"
                      aria-label="delete"
                    >
                      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar src={items.img} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <span className="comment_list_username">
                        {items.name}{" "}
                      </span>
                      - <span className="comment_list_time">{items.date}</span>
                    </>
                  }
                  secondary={items.comment}
                />

                {/* <ListItemText primary={items.date} /> */}
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </div>
  );
}
