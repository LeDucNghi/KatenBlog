import "./CommentList.scss";

import {
  selectGetUserType,
  selectIsLoggedIn,
  selectUserProfile,
} from "../../../auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { Comment } from "../../../../models";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { handleDeleteComment } from "../../addEditThunk";

export interface ICommentButtonsProps {
  listOfComment: Comment[];
  setListOfComment: any;
  id: string;
  items: Comment;
}

export function CommentButtons({
  id,
  listOfComment,
  setListOfComment,
  items,
}: ICommentButtonsProps) {
  const dispatch = useAppDispatch();

  const userType = useAppSelector(selectGetUserType);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userProfile = useAppSelector(selectUserProfile);

  const handleCommentLike = (commentId: string) => {
    // dispatch(handleLikeComment(id, commentId));

    setListOfComment(
      listOfComment.map((list) => {
        if (list.id === commentId) {
          const index = list.likes?.findIndex(
            (like) =>
              like.commentId === commentId && like.userId === userProfile?.id
          );

          if (index! < 0) {
            console.log("comment:", list.id);

            return {
              ...list,
              likes: [
                ...list.likes!,
                {
                  id: 13,
                  createdAt: `${new Date()}`,
                  updatedAt: `${new Date()}`,
                  commentId,
                  postId: Number(id),
                  userId: Number(userProfile?.id),
                },
              ],
            };
          } else {
            console.log("unlike comment ,comment:", list.id);

            const filterLikeList = list.likes?.slice(index, 1);
            console.log(
              "🚀 ~ file: CommentList.tsx:103 ~ listOfComment.map ~ filterLikeList:",
              filterLikeList
            );

            return {
              ...list,
              likes: filterLikeList,
            };
          }
        } else {
          return list;
        }
      })
    );
    console.log(
      "🚀 ~ file: CommentList.tsx:105 ~ listOfComment.map ~ listOfComment:",
      listOfComment
    );
  };

  const handleDeleteComments = (commentId: string) => {
    dispatch(handleDeleteComment(commentId));

    setListOfComment(
      listOfComment.filter((comment) => comment.id !== commentId)
    );
  };

  return (
    <div className="button_content">
      <p>{items.likes?.length} liked</p>
      {isLoggedIn && (
        <IconButton
          onClick={() => handleCommentLike(items.id!)}
          edge="end"
          aria-label="delete"
        >
          {/* {items.likes!.map((like) => {
                            if (like.userId! === userProfile?.id) {
                              return <FavoriteIcon />;
                            }
                            return <FavoriteBorderIcon />;
                          })} */}
          <FavoriteBorderIcon />
        </IconButton>
      )}

      {userType === "isPoster" && (
        <IconButton
          onClick={() => handleDeleteComments(items.id!)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
}
