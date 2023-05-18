import * as React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { IIconsProps } from "../../../models";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

export function Icons({ iconName, className, fontSize, style }: IIconsProps) {
  // SOCIAL
  if (iconName === "facebook")
    return (
      <FacebookIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "instagram")
    return (
      <InstagramIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "github")
    return (
      <GitHubIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "pinterest")
    return (
      <PinterestIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "twitter")
    return (
      <TwitterIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "youtube")
    return (
      <YouTubeIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );

  // CATEGORIES
  if (iconName === "image")
    return (
      <PhotoOutlinedIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "headphone")
    return (
      <HeadphonesOutlinedIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "video")
    return (
      <VideocamOutlinedIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );

  if (iconName === "book")
    return (
      <LibraryBooksIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );

  if (iconName === "setting")
    return (
      <Settings className={`${className}`} fontSize={fontSize} style={style} />
    );

  if (iconName === "logout")
    return (
      <Logout className={`${className}`} fontSize={fontSize} style={style} />
    );

  if (iconName === "avatar")
    return (
      <AccountCircleIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );

  // OTHER
  if (iconName === "burger")
    return (
      <MenuIcon className={`${className}`} fontSize={fontSize} style={style} />
    );
  if (iconName === "search")
    return (
      <SearchIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "share")
    return (
      <ShareIcon className={`${className}`} fontSize={fontSize} style={style} />
    );
  if (iconName === "option")
    return (
      <MoreHorizIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "person")
    return (
      <PersonIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );
  if (iconName === "arrowup")
    return (
      <KeyboardArrowUpIcon
        className={`${className}`}
        fontSize={fontSize}
        style={style}
      />
    );

  return null;
}
