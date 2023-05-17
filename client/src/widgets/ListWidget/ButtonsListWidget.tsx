import "./ButtonsListWidget.scss";

import * as React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { BREAK_POINTS_NUMBER } from "../../constants";
import { Icons } from "../../components/Common/Icons/Icons";
import { useWindowSize } from "../../hooks/useWindowSize";

export interface IListButtonsWidgetProps {
  style?: React.CSSProperties;
  onclick?: any;
}

export function ButtonsListWidget({ style, onclick }: IListButtonsWidgetProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { windowInnerWidth } = useWindowSize();

  return (
    <div className="buttons_widget" style={style}>
      <button className="icon_button" onClick={() => navigate(`/search`)}>
        <Icons iconName="search" />
      </button>

      <button className="icon_button" onClick={onclick}>
        <Icons
          iconName={
            windowInnerWidth < BREAK_POINTS_NUMBER.sm ||
            (id && pathname === `/profile/${id}`)
              ? "burger"
              : "person"
          }
        />
      </button>
    </div>
  );
}
