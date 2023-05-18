export type IconName =
  | "facebook"
  | "instagram"
  | "github"
  | "twitter"
  | "pinterest"
  | "search"
  | "youtube"
  | "burger"
  | "search"
  | "image"
  | "headphone"
  | "video"
  | "share"
  | "option"
  | "person"
  | "arrowup"
  | "book"
  | "setting"
  | "logout"
  | "avatar";

export type IconsFontSize = "large" | "medium" | "small";

export interface IIconsProps {
  icon: string;
  iconName?: IconName;
  className?: string;
  fontSize?: IconsFontSize;
  style?: React.CSSProperties;
}
