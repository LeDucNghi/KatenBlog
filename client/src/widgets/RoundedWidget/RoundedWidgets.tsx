import "./RoundedWidget.scss";

import * as React from "react";

import { Images } from "../../constants/image";

export interface IRoundedWidgetProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  isDivider?: boolean;
  style?: React.CSSProperties;
}

export function RoundedWidget({
  children,
  title,
  isDivider,
  style,
}: IRoundedWidgetProps) {
  return (
    <div className="rounded_widget" style={style}>
      {title && (
        <div className="widget_header">
          <h3 className="widget_title">{title}</h3>

          {isDivider && <img src={Images.titleWave} alt="" />}
        </div>
      )}

      <div className="widget_content">{children}</div>
    </div>
  );
}
