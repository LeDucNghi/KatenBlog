import * as React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

type IconName =
  | "facebook"
  | "instagram"
  | "github"
  | "twitter"
  | "pinterest"
  | "search"
  | "youtube"
  | "burger"
  | "search";

type IconsFontSize = "large" | "medium" | "small";

export interface IIconsProps {
  iconName: IconName;
  className?: string;
  fontSize?: IconsFontSize;
}

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

  // OTHER
  if (iconName === "burger")
    return <MenuIcon className={`${className}`} fontSize={fontSize} />;
  if (iconName === "search")
    return <SearchIcon className={`${className}`} fontSize={fontSize} />;

  return null;
}
