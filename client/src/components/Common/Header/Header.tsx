import "./Header.scss";

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import AccountMenu from "./AccountMenu";
import { AccountMenuWidget } from "../../../constants";
import { CustomDrawer } from "../Drawer/Drawer";
import { HeaderDrawer } from "./Drawer";
import { Navbar } from "./Navbar";
import { ProfileHeader } from "./ProfileHeader";
import { getUserProfile } from "../../../features/auth/authThunk";
import { handleGetAllPost } from "../../../features/addEditBlog/addEditThunk";
import { logout } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const token = JSON.parse(localStorage.getItem("token")!);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

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

  if (id && pathname === `/profile/${id}`) return <ProfileHeader />;

  return (
    <div className="header_container">
      <Navbar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />

      <CustomDrawer
        width={300}
        open={openDrawer}
        close={() => setOpenDrawer(!openDrawer)}
        anchor="right"
      >
        <HeaderDrawer />
      </CustomDrawer>

      {/* <AccountMenu
        listItems={AccountMenuWidget}
        // open={openMenu}
        // close={() => setOpenMenu(!openMenu)}
      /> */}
    </div>
  );
}
