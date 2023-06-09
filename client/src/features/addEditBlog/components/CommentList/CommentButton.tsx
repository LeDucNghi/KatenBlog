import "./CommentList.scss";

import { handleDeleteComment, handleLikeComment } from "../../addEditThunk";
import { selectGetUserType, selectIsLoggedIn } from "../../../auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { Comment } from "../../../../models";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

export interface ICommentButtonsProps {
  id: string;
  items: Comment;
}

export function CommentButtons({ id, items }: ICommentButtonsProps) {
  const dispatch = useAppDispatch();

  const userType = useAppSelector(selectGetUserType);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className="button_content">
      <p>{items.likes?.length} liked</p>
      {isLoggedIn && (
        <IconButton
          onClick={() => dispatch(handleLikeComment(id, items.id!))}
          edge="end"
          aria-label="delete"
        >
          {items.likes!.length === 0 ? (
            <FavoriteBorderIcon />
          ) : items.isLiked ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      )}

      {userType === "isPoster" && (
        <IconButton
          onClick={() => dispatch(handleDeleteComment(items.id!))}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
}
