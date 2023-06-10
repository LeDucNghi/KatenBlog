import "./PostHeader.scss";

import * as React from "react";

import { Post, UserType } from "../../../../models";

import { CustomSelect } from "../../../../components/Common/Select/CustomSelect";
import { TextField } from "@mui/material";
import moment from "moment";
import { selectUserProfile } from "../../../auth/authSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IPostHeaderProps {
  pathname: string;
  values: Post;
  handleChange: any;
  handleBlur: any;
  blogData: Post | null | undefined;
  userType: UserType | null | undefined;
}

export function PostHeader({
  pathname,
  blogData,
  userType,
  values,
  handleBlur,
  handleChange,
}: IPostHeaderProps) {
  const userProfile = useAppSelector(selectUserProfile);

  return (
    <div className="post_header">
      <h1 className="post_title">
        {userType === "isGuest" ? (
          `${blogData?.title}`
        ) : (
          <TextField
            className="input_field"
            fullWidth
            label="Blog's Title"
            id="outlined-size-small"
            size="small"
            name="title"
            value={values?.title}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={touched.title && Boolean(errors.title)}
            // helperText={touched.title && errors.title}
          />
        )}
      </h1>

      {pathname === "/add" && (
        <h1 className="post_title">
          <TextField
            className="input_field"
            fullWidth
            label="Blog's Subtitle"
            id="outlined-size-small"
            size="small"
            name="subTitle"
            value={values?.subTitle}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={touched.title && Boolean(errors.title)}
            // helperText={touched.title && errors.title}
          />
        </h1>
      )}

      <ul className="meta_list">
        <li>
          <div className="meta_author">
            <img
              src={
                pathname === `/add`
                  ? userProfile?.avatar
                  : blogData?.user?.avatar
              }
              alt=""
            />
          </div>
          <span className="meta_author_name">
            {pathname === `/add`
              ? userProfile?.fullname
              : blogData?.user?.fullname}{" "}
          </span>
        </li>
        <li>
          {" "}
          {userType === "isGuest" ? (
            `${blogData?.categories}`
          ) : (
            <CustomSelect
              values={values?.categories}
              handleChange={handleChange}
              handleBlur={handleBlur}
              name="categories"
            />
          )}{" "}
        </li>

        {pathname !== `/add` && (
          <li>{moment(blogData?.createdAt).format("LL")} </li>
        )}
      </ul>
    </div>
  );
}
