import * as React from "react";

export interface IScrollToProps {
  x: number;
  y: number;
}

export function ScrollTo({ x, y }: IScrollToProps) {
  React.useEffect(() => {
    window.scrollTo(x, y);
  }, [x, y]);

  return null;
}
