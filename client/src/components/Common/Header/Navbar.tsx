import { Icons } from "../Icons/Icons";
import { Images } from "../../../constants/image";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../custom-hook/useWindowSize";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const navigate = useNavigate();
  const { windowInnerWidth } = useWindowSize();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <nav className="header_navbar">
      <div className="navbar_container">
        <a href="/" className="navbar_brand">
          <img src={Images.logo} alt="" />
        </a>

        <div className="navbar_collapse">
          <a href="/" className="nav_link">
            Home
          </a>
          <a href="/" className="nav_link">
            LifeStyle
          </a>
          <a href="/" className="nav_link">
            Inspiration
          </a>
          <a href="/" className="nav_link">
            Pages
          </a>
          <a href="/" className="nav_link">
            Contact
          </a>
        </div>

        <div className="navbar_right">
          <ul className="navbar_icon">
            <li className="nav_icon_items">
              <a href="/">
                <Icons iconName="facebook" />
              </a>
            </li>
            <li className="nav_icon_items">
              <a href="/">
                <Icons iconName="twitter" />
              </a>
            </li>
            <li className="nav_icon_items">
              <a href="/">
                <Icons iconName="instagram" />
              </a>
            </li>
            <li className="nav_icon_items">
              <a href="/">
                <Icons iconName="pinterest" />
              </a>
            </li>
            <li className="nav_icon_items">
              <a href="/">
                <Icons iconName="github" />
              </a>
            </li>
          </ul>

          <div className="navbar_buttons">
            <button className="icon_button">
              <Icons iconName="search" />
            </button>

            <button className="icon_button">
              <Icons iconName="burger" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
