import "./ButtonsListWidget.scss";

import * as React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import AccountMenu from "../../components/Common/Header/AccountMenu";
import { BREAK_POINTS_NUMBER } from "../../constants";
import { Icons } from "../../components/Common/Icons/Icons";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";
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
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className="buttons_widget" style={style}>
      <button className="icon_button" onClick={() => navigate(`/search`)}>
        <Icons iconName="search" />
      </button>

      <button className="icon_button" onClick={onclick}>
        {isLoggedIn && pathname !== `/profile/${id}` ? (
          <AccountMenu />
        ) : (
          <Icons
            iconName={
              windowInnerWidth < BREAK_POINTS_NUMBER.sm ||
              (id && pathname === `/profile/${id}`)
                ? "burger"
                : "person"
            }
          />
        )}
      </button>
    </div>
  );
}
