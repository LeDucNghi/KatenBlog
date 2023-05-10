import * as React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import { IIconsProps } from "../../../models";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

export function Icons({ iconName, className, fontSize }: IIconsProps) {
  // SOCIAL
  if (iconName === "facebook")
    return <FacebookIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "instagram")
    return <InstagramIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "github")
    return <GitHubIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "pinterest")
    return <PinterestIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "twitter")
    return <TwitterIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "youtube")
    return <YouTubeIcon className={`${className}`} fontSize={fontSize} />;

  // CATEGORIES
  if (iconName === "image")
    return <PhotoOutlinedIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "headphone")
    return (
      <HeadphonesOutlinedIcon className={`${className}`} fontSize={fontSize} />
    );
  if (iconName === "video")
    return (
      <VideocamOutlinedIcon className={`${className}`} fontSize={fontSize} />
    );

  // OTHER
  if (iconName === "burger")
    return <MenuIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "search")
    return <SearchIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "share")
    return <ShareIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "option")
    return <MoreHorizIcon className={`${className}`} fontSize={fontSize} />;

  return null;
}
