import "./Header.scss";

import { BREAK_POINTS_NUMBER, NavbarWidget } from "../../../constants";

import { ButtonsListWidget } from "../../../widgets/ListWidget/ButtonsListWidget";
import { Icons } from "../Icons/Icons";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface INavbarProps {
  open: boolean;
  setOpen: any;
}

export function Navbar({ open, setOpen }: INavbarProps) {
  const navigate = useNavigate();
  const { windowInnerWidth } = useWindowSize();

  const onclick = () => {
    if (windowInnerWidth <= BREAK_POINTS_NUMBER.sm) {
      setOpen(!open);
    } else {
      navigate(`/signin`);
    }
  };

  return (
    <nav className="header_navbar">
      <div className="navbar_container">
        <a href="/" className="navbar_brand">
          <img src={Images.logo} alt="" />
        </a>

        {windowInnerWidth > BREAK_POINTS_NUMBER.sm && (
          <div className="navbar_collapse">
            {NavbarWidget.map((items, key) => {
              return (
                <a href={items.route} className="nav_link" key={key}>
                  {items.name}
                </a>
              );
            })}
          </div>
        )}

        <div className="navbar_right">
          {windowInnerWidth > BREAK_POINTS_NUMBER.sm && <IconsListWidget />}

          <div className="navbar_buttons">
            <ButtonsListWidget onclick={onclick} style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>
    </nav>
  );
}
