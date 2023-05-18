import "./CommentList.scss";

import * as React from "react";

import { Paper, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import Avatar from "@mui/material/Avatar";
import { Comment } from "../../../../models";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { Images } from "../../../../constants/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import { handleGetPostComment } from "../../addEditThunk";
import moment from "moment";
import { selectPaginate } from "../../addEditSlice";

export interface ICommentListProps {
  id: string;
  commentList: Comment[] | null | undefined;
}

export function CommentList({ id, commentList }: ICommentListProps) {
  console.log(
    "🚀 ~ file: CommentList.tsx:30 ~ CommentList ~ commentList:",
    commentList
  );
  const dispatch = useAppDispatch();
  const commentListPaginate = useAppSelector(selectPaginate);

  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const handleLikePost = () => {
    setIsLiked(!isLiked);
  };

  const handlePageChange = (value: number) => {
    dispatch(
      handleGetPostComment(id, {
        page: value,
        limit: commentListPaginate.limit,
      })
    );
  };

  return (
    <RoundedWidget
      title={
        <div>
          {commentList!.length < 10
            ? `0${commentList!.length}`
            : `${commentList!.length}`}{" "}
          Comments
        </div>
      }
      isDivider
      anchorTitle="left"
    >
      <div className="comment_list_container">
        <List dense={false}>
          {commentList?.length === 0 ? (
            <div className="comment_list_empty">
              <div className="comment_list_empty_img">
                <img src={Images.notask} alt="" />
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
                      <Avatar src={items.user?.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <>
                          <span className="comment_list_username">
                            {items.user?.fullname}{" "}
                          </span>{" "}
                          -{" "}
                          <span className="comment_list_time">
                            {moment(items.createdAt).startOf("day").fromNow()}
                          </span>
                        </>
                      }
                      secondary={items.content}
                    />
                  </ListItem>
                </Paper>
              );
            })
          )}
        </List>

        {commentList?.length !== 0 && (
          <div className="comment_list_paginate">
            <CustomPagination
              paginate={commentListPaginate}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </RoundedWidget>
  );
}
