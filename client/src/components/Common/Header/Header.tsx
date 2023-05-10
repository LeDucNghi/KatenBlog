import "./Header.scss";

import { useEffect, useState } from "react";

import { Navbar } from "./Navbar";
import { getUserProfile } from "../../../features/auth/authThunk";
import { handleGetAllPost } from "../../../features/addEditBlog/addEditThunk";
import { logout } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../../custom-hook/useWindowSize";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();

  const { windowInnerWidth } = useWindowSize();

  const dispatch = useAppDispatch();

  const token = JSON.parse(localStorage.getItem("token")!);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      dispatch(logout());
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(handleGetAllPost());
  }, [dispatch]);

  if (pathname === "/signin") return <></>;
  if (pathname === "/signup") return <></>;
  if (pathname === "/profile/*") return <></>;

  return (
    <div className="header_container">
      <Navbar />
    </div>
  );
}
