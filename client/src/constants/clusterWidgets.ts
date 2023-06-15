import { BREAK_POINTS_NUMBER } from "./breakPoints";
import { BlogsSample } from "../mock";
import { IconName } from "../models";

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

export const navbarWidget = (
  id?: string | number | undefined,
  width?: number
) => {
  const navbar = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "LifeStyle",
      route: "/categories/lifestyle",
    },
    {
      id: 3,
      name: "Inspiration",
      route: "/categories/inspiration",
    },
    {
      id: 4,
      name: "Food",
      route: "/categories/food",
    },
    {
      id: 5,
      name: "Contact",
      route: "/categories/contact",
    },
  ];

  if (width! < BREAK_POINTS_NUMBER.md && id) {
    const userMenu = [
      {
        id: 5,
        name: "Profile",
        route: `/profile/${id}`,
      },
      {
        id: 6,
        name: "Your Blogs",
        route: "/about",
      },
      {
        id: 7,
        name: "Add new blog",
        route: "/add",
      },
      {
        id: 8,
        name: "Logout",
        route: "/",
      },
    ];
    const newNavbar = navbar.concat(userMenu);

    return newNavbar;
  }

  return navbar;
};

export const ProfileNavbarWidget = [
  {
    id: 1,
    name: "Lifestyle",
  },
  {
    id: 2,
    name: "Inspiration",
  },
  {
    id: 3,
    name: "Fashion",
  },
  {
    id: 4,
    name: "Politic",
  },
  {
    id: 5,
    name: "Culture",
  },
  {
    id: 6,
    name: "Contact",
  },
];

export const BlogTopicWidget = [
  {
    id: 1,
    topicTitle: "Lifestyle",
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

export const accountMenuWidget = (id: string | number) => {
  const menu = [
    {
      id: 1,
      name: "Profile",
      route: `/profile/${id}`,
      icon: "person" as IconName,
    },
    {
      id: 2,
      name: "Your Blogs",
      route: "/about",
      icon: "book" as IconName,
    },
    {
      id: 3,
      name: "Add new blog",
      route: "/add",
      icon: "bookadd" as IconName,
    },

    {
      id: 4,
      name: "Logout",
      route: "/",
      icon: "logout" as IconName,
    },
  ];

  if (!id) {
    menu.push();
  }

  return menu;
};

export const CategoriesOption = [
  {
    id: 1,
    optionName: "Lifestyle",
    optionValue: "lifestyle",
  },
  {
    id: 2,
    optionName: "Inspiration",
    optionValue: "inspiration",
  },
  {
    id: 3,
    optionName: "Fashion",
    optionValue: "fashion",
  },
  {
    id: 4,
    optionName: "Politic",
    optionValue: "politic",
  },
  {
    id: 5,
    optionName: "Culture",
    optionValue: "culture",
  },
];
