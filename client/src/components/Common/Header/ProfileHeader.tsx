import "./ProfileHeader.scss";

import { Icons } from "../Icons/Icons";
import { IconsListWidget } from "../../../widgets/IconsListWidget/IconsListWidget";
import { Images } from "../../../constants/image";
import { NavbarWidget } from "../../../constants";

export interface IProfileHeaderProps {}

export function ProfileHeader(props: IProfileHeaderProps) {
  return (
    <section className="profile_section">
      <div className="section_blur"></div>
      <div className="profile_header">
        <div className="top_header">
          <div className="top_header_main">
            <IconsListWidget
              style={{
                width: "20%",
              }}
              // color="#fff"
            />

            <div className="main_user header_main_items">
              <div className="user_avatar">
                <img src={Images.avatar} alt="" />
              </div>

              <h2 className="user_name">Katen</h2>

              <div className="user_slogan">
                Professional Writer & Personal Blogger
              </div>
            </div>

            <div className="main_button header_main_items">
              <button className="icon_button">
                <Icons iconName="search" />
              </button>

              <button className="icon_button">
                <Icons iconName="burger" />
              </button>
            </div>
          </div>
        </div>

        <div className="nav_header">
          {NavbarWidget.map((nav, key) => {
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
        </div>
      </div>

      <div className="profile_about">
        <h2>I'm Katen Doe.</h2>
        <p>
          Hello, I’m a content writer who is fascinated by content fashion,
          celebrity and lifestyle. She helps clients bring the right content to
          the right people.
        </p>
        <button>about me</button>
      </div>

      <div className="profile_foot">
        <img src={Images.wave} alt="" />
      </div>
    </section>
  );
}
