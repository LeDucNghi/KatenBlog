import "./Header.scss";

import { BREAK_POINTS_NUMBER, NavbarWidget } from "../../../constants";

import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { NavbarCollapse } from "./NavbarCollapse";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface INavbarProps {
  openDrawer: boolean;
  setOpenDrawer: any;

  openMenu: boolean;
  setOpenMenu: any;
}

export function Navbar({
  openDrawer,
  setOpenDrawer,
  openMenu,
  setOpenMenu,
}: INavbarProps) {
  const navigate = useNavigate();
  const { windowInnerWidth } = useWindowSize();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [type, setType] = useState("");

  const onclick = () => {
    if (windowInnerWidth <= BREAK_POINTS_NUMBER.sm) {
      setOpenDrawer(!openDrawer);
    } else {
      if (isLoggedIn) {
        setOpenMenu(!openMenu);
      } else {
        navigate(`/signin`);
      }
    }
  };

  const handleTypeChange = (type: string) => {
    console.log("🚀 ~ file: Navbar.tsx:48 ~ handleTypeChange ~ type:", type);
  };

  return (
    <nav className="header_navbar">
      <div className="navbar_container">
        <a href="/" className="navbar_brand">
          <img src={Images.logo} alt="" />
        </a>

        {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
          <NavbarCollapse
            setNewType={handleTypeChange}
            navbarList={NavbarWidget}
          />
        )}

        <div className="navbar_right">
          {windowInnerWidth > BREAK_POINTS_NUMBER.md && (
            <IconsListWidget iconsSpace="0 0.5em" />
          )}

          <div className="navbar_buttons">
            <ButtonsListWidget onclick={onclick} style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>
    </nav>
  );
}
