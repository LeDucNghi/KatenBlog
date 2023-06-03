import "./Empty.scss";

import * as React from "react";

import { Images } from "../../../constants";

export interface IEmptyProps {
  content: string;
  style?: React.CSSProperties;
}

export function Empty({ content, style }: IEmptyProps) {
  return (
    <div className="empty_wrapper" style={style}>
      <div className="empty_image">
        <img src={Images.emptyListPerson} alt="" />
      </div>

      <div className="empty_content">{content}</div>
    </div>
  );
}
