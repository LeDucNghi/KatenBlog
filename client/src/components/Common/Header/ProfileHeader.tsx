import "./ProfileHeader.scss";

import { Icons } from "../Icons/Icons";
import { Images } from "../../../constants/image";

export interface IProfileHeaderProps {}

export function ProfileHeader(props: IProfileHeaderProps) {
  return (
    <section className="profile_section">
      <div className="section_blur"></div>
      <div className="profile_header">
        <div className="top_header">
          <div className="top_header_main">
            <ul className="main_social header_main_items">
              <li>
                <Icons
                  className="main_social_icon"
                  iconName="facebook"
                  fontSize="medium"
                />{" "}
              </li>
              <li>
                <Icons
                  className="main_social_icon"
                  iconName="twitter"
                  fontSize="medium"
                />{" "}
              </li>
              <li>
                <Icons
                  className="main_social_icon"
                  iconName="instagram"
                  fontSize="medium"
                />{" "}
              </li>
              <li>
                <Icons
                  className="main_social_icon"
                  iconName="pinterest"
                  fontSize="medium"
                />{" "}
              </li>
              <li>
                <Icons
                  className="main_social_icon"
                  iconName="youtube"
                  fontSize="medium"
                />{" "}
              </li>
            </ul>

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
          <div className="nav_items">Home</div>
          <div className="nav_items">Lifestyle</div>
          <div className="nav_items">Inspiration</div>
          <div className="nav_items">Pages</div>
          <div className="nav_items">Contact</div>
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
