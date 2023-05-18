import "@mui/icons-material/";

import * as React from "react";

import { IIconsProps } from "../../../models";

export function CustomIcons({
  icon,
  iconName,
  fontSize,
  className,
  style,
}: IIconsProps) {
  const Icons = React.lazy(() => import(`@mui/icons-material/${icon}`));

  return <Icons className={`${className}`} fontSize={fontSize} style={style} />;
}
