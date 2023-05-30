import "./PostForm.scss";

import * as React from "react";

import { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { DocTitle } from "../../../../widgets/DocTitle/DocTitle";
import { Images } from "../../../../constants";
import ReactQuill from "react-quill";
import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import TextField from "@mui/material/TextField";

export interface IPostFormProps {}

export function PostForm(props: IPostFormProps) {
  const [fieldValue, setFieldValue] = useState("");

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

  useEffect(() => {
    console.log(
      "🚀 ~ file: PostForm.tsx:17 ~ PostForm ~ fieldValue:",
      fieldValue
    );
  }, [fieldValue]);

  return (
    <DocTitle title="Zyro - Create your own">
      <div className="form_container">
        <div className="form_image">
          <RoundedWidget
            title="Choose your represent image for your blog🤔"
            isDivider
            style={{ width: "100%" }}
          >
            <div className="image">
              <img src={Images.blogFormBackground} alt="" />
            </div>
          </RoundedWidget>
        </div>

        <div className="form_fields">
          <RoundedWidget
            title="Create your own blog 😊"
            isDivider
            style={{ height: "100%" }}
          >
            <div className="fields_container">
              <TextField
                className="field"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <TextField
                className="field"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              {/* <TextField
                className="field"
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              /> */}

              <ReactQuill
                className="field"
                placeholder="Content"
                theme="snow"
                value={fieldValue}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   setFieldValue(e.target.value)
                // }
                // onBlur={handleBlur}
                modules={modules}
              />

              <Button className="form_button" type="submit">
                Create blog
              </Button>
            </div>
          </RoundedWidget>
        </div>
      </div>
    </DocTitle>
  );
}
