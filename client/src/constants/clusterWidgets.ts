import { BlogsSample } from "../mock";

export const IconsWidgets = [
  {
    id: 1,
    icon: "facebook",
    route: `${process.env.REACT_APP_FB_LINK}`,
    className: `icon`,
    fontSize: "small",
  },
  {
    id: 2,
    icon: "twitter",
    route: `/`,
    className: `icon`,
    fontSize: "small",
  },
  {
    id: 3,
    icon: "instagram",
    route: `${process.env.REACT_APP_IG_LINK}`,
    className: `icon`,
    fontSize: "small",
  },
  {
    id: 4,
    icon: "pinterest",
    route: `/`,
    className: `icon`,
    fontSize: "small",
  },
  {
    id: 5,
    icon: "github",
    route: `${process.env.REACT_APP_GITHUB_LINK}`,
    className: `icon`,
    fontSize: "small",
  },
  {
    id: 6,
    icon: "youtube",
    route: `/`,
    className: `icon`,
    fontSize: "small",
  },
];

export const NavbarWidget = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "LifeStyle",
    route: "/",
  },
  {
    id: 3,
    name: "Inspiration",
    route: "/",
  },
  {
    id: 4,
    name: "Pages",
    route: "/",
  },
  {
    id: 5,
    name: "Contact",
    route: "/",
  },
];

export const BlogTopicWidget = [
  {
    id: 1,
    topicTitle: "LifeStyle",
    topicContent: BlogsSample,
  },
  {
    id: 2,
    topicTitle: "Inspiration",
    topicContent: BlogsSample,
  },
  {
    id: 3,
    topicTitle: "Fashion",
    topicContent: BlogsSample,
  },
  {
    id: 4,
    topicTitle: "Politic",
    topicContent: BlogsSample,
  },
  {
    id: 5,
    topicTitle: "Trending",
    topicContent: BlogsSample,
  },
  {
    id: 6,
    topicTitle: "Culture",
    topicContent: BlogsSample,
  },
];

export const AccountMenuWidget = [
  {
    id: 1,
    name: "Profile",
    route: "/profile/1",
    icon: "AccountCircleIcon",
  },
  {
    id: 2,
    name: "Your Blogs",
    route: "/about",
    icon: "LibraryBooksIcon",
  },
  {
    id: 3,
    name: "Settings",
    route: "/",
    icon: "Settings",
  },

  {
    id: 4,
    name: "Logout",
    route: "/",
    icon: "Logout",
  },
];
