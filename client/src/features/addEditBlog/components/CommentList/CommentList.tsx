import "./CommentList.scss";

import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import Avatar from "@mui/material/Avatar";
import { Comment } from "../../../../models";
import { CommentButtons } from "./CommentButton";
import { CustomPagination } from "../../../../components/Common/Pagination/Pagination";
import { Images } from "../../../../constants/image";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import { handleGetPostComment } from "../../addEditThunk";
import moment from "moment";
import { selectPaginate } from "../../addEditSlice";

export interface ICommentListProps {
  id: string;
  commentList: Comment[];
}

export function CommentList({ id, commentList }: ICommentListProps) {
  const dispatch = useAppDispatch();
  const commentListPaginate = useAppSelector(selectPaginate);

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
      title={` Comments ( ${
        commentList!.length < 10
          ? `0${commentList!.length}`
          : commentList!.length > 99
          ? `${commentList!.length}+`
          : `${commentList!.length}`
      } )`}
      style={{
        width: " 100%",
        margin: "2em 0",
      }}
      isDivider
      anchorTitle="left"
    >
      <List dense={false} className="comment_list_container">
        {commentList?.length === 0 ? (
          <div className="comment_list_empty">
            <div className="comment_list_empty_img">
              <img src={Images.emptyListPerson} alt="" />
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
                  className="comment_buttons"
                  secondaryAction={
                    <CommentButtons items={items} id={`${id}`} />
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
                    secondary={
                      <p className="comment_content">{items.content} </p>
                    }
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
    </RoundedWidget>
  );
}
