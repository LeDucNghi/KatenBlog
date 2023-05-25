import "./PostContent.scss";

import { Post, UserType } from "../../../../models";

import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ReactQuill from "react-quill";
import { selectPostingStatus } from "../../addEditSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IPostContentProps {
  values: Post;
  handleChange: any;
  handleBlur: any;
  userType: UserType | null | undefined;
  blogData: Post | null | undefined;
  setFieldValue: any;
}

export function PostContent({
  values,
  handleBlur,
  userType,
  blogData,
  setFieldValue,
}: IPostContentProps) {
  const isPosting = useAppSelector(selectPostingStatus);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="post_body">
      <div className="post_form">
        <ReactQuill
          className={
            userType === "isGuest"
              ? "post_input_field isGuest"
              : "post_input_field"
          }
          placeholder="Content"
          theme="snow"
          value={values.content}
          onChange={(e) => setFieldValue("content", e)}
          onBlur={handleBlur}
          modules={modules}
        />

        {userType !== "isGuest" && (
          <LoadingButton
            loading={
              userType === "isPoster" ? isPosting.isEdit : isPosting.isAdd
            }
            className="post_form_button"
            variant="contained"
            type="submit"
          >
            {userType === "isPoster" ? `Update this post` : `Create new post`}
          </LoadingButton>
        )}
      </div>
    </div>
  );
}
