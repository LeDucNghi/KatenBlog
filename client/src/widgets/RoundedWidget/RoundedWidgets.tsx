import "./RoundedWidget.scss";

import * as React from "react";

import { Images } from "../../constants/image";

export interface IRoundedWidgetProps {
  children: string | JSX.Element;
  title?: string;
}

export function RoundedWidget({ children, title }: IRoundedWidgetProps) {
  return (
    <div className="rounded_widget">
      {title && (
        <div className="widget_header">
          <h3 className="widget_title">{title}</h3>

          <img src={Images.titleWave} alt="" />
        </div>
      )}

      <div className="widget_content">{children}</div>
    </div>
  );
}
