import "./CommentList.scss";

import * as React from "react";

import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";

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
        {generate(
          <Paper elevation={5} className="comment_items">
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
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={"Secondary text"}
              />
            </ListItem>
          </Paper>
        )}
      </List>
    </div>
  );
}

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
