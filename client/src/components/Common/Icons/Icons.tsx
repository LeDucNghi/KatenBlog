import * as React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";

type IconName =
  | "facebook"
  | "instagram"
  | "github"
  | "twitter"
  | "pinterest"
  | "search";

export interface IIconsProps {
  iconName: IconName;
  className?: string;
}

export function Icons({ iconName, className }: IIconsProps) {
  if (iconName === "facebook")
    return <FacebookIcon className={`${className}`} />;
  if (iconName === "instagram")
    return <InstagramIcon className={`${className}`} />;
  if (iconName === "github") return <GitHubIcon className={`${className}`} />;
  if (iconName === "pinterest")
    return <PinterestIcon className={`${className}`} />;
  if (iconName === "twitter") return <TwitterIcon className={`${className}`} />;
  if (iconName === "search") return <SearchIcon className={`${className}`} />;

  return null
}
