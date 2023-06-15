import "./NavbarWidget.scss";

import { navbarWidget } from "../../constants";
import { selectUserProfile } from "../../features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";
import { useWindowSize } from "../../hooks/useWindowSize";

export interface INavbarWidgetProps {}

export function NavbarsWidget(props: INavbarWidgetProps) {
  const userProfile = useAppSelector(selectUserProfile);

  const { windowInnerWidth } = useWindowSize();

  return (
    <>
      {navbarWidget(userProfile?.id, windowInnerWidth).map((nav, key) => {
        return (
          <a
            key={key}
            href={nav.route}
            className={nav.id === 1 ? "nav_items isActive" : "nav_items"}
          >
            {nav.name}{" "}
          </a>
        );
      })}
    </>
  );
}
