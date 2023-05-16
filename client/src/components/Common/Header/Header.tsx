import "./Header.scss";

import { useEffect, useState } from "react";

import { CustomDrawer } from "../Drawer/Drawer";
import { HeaderDrawer } from "./Drawer";
import { Navbar } from "./Navbar";
import { getUserProfile } from "../../../features/auth/authThunk";
import { handleGetAllPost } from "../../../features/addEditBlog/addEditThunk";
import { logout } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useLocation } from "react-router-dom";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();

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

  return (
    <div className="header_container">
      <Navbar open={open} setOpen={setOpen} />

      <CustomDrawer
        width={300}
        open={open}
        close={() => setOpen(!open)}
        anchor="right"
      >
        <HeaderDrawer />
      </CustomDrawer>
    </div>
  );
}
