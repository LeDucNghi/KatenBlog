import "./PostBanner.scss";

import { Post, UserType } from "../../../../models";

import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { ErrorMessage } from "formik";
import { setImageFile } from "../../addEditSlice";
import { useAppDispatch } from "../../../../app/hooks";
import { useState } from "react";

export interface IPostBannerProps {
  values: Post;
  handleBlur: any;
  userType: UserType | null | undefined;
  setFieldValue: any;
}

export function PostBanner({
  values,
  handleBlur,
  userType,
  setFieldValue,
}: IPostBannerProps) {
  const dispatch = useAppDispatch();
  var [image, setImage] = useState<File | null | string>(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    image = URL.createObjectURL(e.target.files![0]);
    setImage(image);

    setFieldValue("image", e.target.files![0]);
    dispatch(setImageFile(e.target.files![0]));
  };

  return (
    <div className="addedit_banner_container">
      <div className="addedit_banner_image">
        {userType === "isGuest" ? null : (
          <Button className="banner_image_button">
            <input
              onChange={(e) => handleChangeImg(e)}
              onBlur={handleBlur}
              className="banner_image_input"
              accept="image/*"
              type="file"
              name="image"
            />
            <CameraAltIcon className="banner_image_icon" fontSize="large" />

            <ErrorMessage name="image" />
          </Button>
        )}
        <img
          src={
            image
              ? `${image}`
              : values.image
              ? `${values?.image}`
              : "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          }
          alt=""
        />
      </div>
    </div>
  );
}
