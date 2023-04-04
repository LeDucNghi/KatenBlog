import "./CommentList.scss";

import * as React from "react";

import { Paper, Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import { Comment } from "../../../../models";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { images } from "../../../../constants/image";
import moment from "moment";

export interface ICommentListProps {
  id: string;
  commentList: Comment[] | null | undefined;
}

export function CommentList({ id, commentList }: ICommentListProps) {
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
        {commentList!.length < 10
          ? `0${commentList!.length}`
          : `${commentList!.length}`}{" "}
        Comments
      </Typography>

      <List dense={false}>
        {commentList?.length === 0 ? (
          <div className="comment_list_empty">
            <div className="comment_list_empty_img">
              <img src={images.notask} alt="" />
            </div>

            <p className="comment_list_empty_title">
              There are currently no reviews yet
            </p>
          </div>
        ) : (
          commentList!.map((items, key) => {
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
                    <Avatar src={items.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <span className="comment_list_username">
                          {/* {items.name}{" "} */}
                          hi
                        </span>{" "}
                        -{" "}
                        <span className="comment_list_time">
                          {moment(items.createdAt).startOf("day").fromNow()}
                        </span>
                      </>
                    }
                    secondary={items.content}
                  />

                  {/* <ListItemText primary={items.date} /> */}
                </ListItem>
              </Paper>
            );
          })
        )}
      </List>
    </div>
  );
}
