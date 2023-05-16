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
  | "arrowup";

export type IconsFontSize = "large" | "medium" | "small";

export interface IIconsProps {
  iconName: IconName;
  className?: string;
  fontSize?: IconsFontSize;
  style?: React.CSSProperties;
}
