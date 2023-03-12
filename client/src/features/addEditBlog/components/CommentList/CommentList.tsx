import "./CommentList.scss";

import * as React from "react";

import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import { comments } from "../../../../mock";

export interface ICommentListProps {
  id: string;
}

export function CommentList({ id }: ICommentListProps) {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
    // try {

    // } catch (error) {

    // }
  };

  return (
    <div className="comment_list_container">
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
                  primary={`${items.name} - ${items.date}`}
                  secondary={`${items.comment}`}
                />
              </ListItem>
            </Paper>
          );
        })}
      </List>
    </div>
  );
}
