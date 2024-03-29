import "./Header.scss";

import { BREAK_POINTS_NUMBER, navbarWidget } from "../../../constants";

import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { NavbarCollapse } from "./NavbarCollapse";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
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
        <span onClick={() => navigate(`/`)} className="navbar_brand">
          <img src={Images.logo} alt="" />
        </span>

        {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
          <NavbarCollapse
            setNewType={handleTypeChange}
            navbarList={navbarWidget()}
          />
        )}

        <div className="navbar_right">
          {windowInnerWidth > BREAK_POINTS_NUMBER.lg && (
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
