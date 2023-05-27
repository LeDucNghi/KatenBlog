import * as React from "react";

import { Contact } from "../pages/Contact/Contact";
import NotFound from "../components/Common/NotFound/NotFound";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { Test } from "../pages/test/test";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Posts = React.lazy(() => import("../pages/Post/Post"));
const Search = React.lazy(() => import("../pages/Search/Search"));
const UserProfile = React.lazy(() => import("../pages/Profile/UserProfile"));
const Categories = React.lazy(() => import("../pages/Categories/Categories"));

export const routes = [
  {
    path: "/",
    title: "Katen.",
    element: <Home />,
    loadingTimeout: 1000,
    isLandingLayout: true,
  },

  {
    path: "signin",
    title: "Sign In",
    element: <SignIn />,
    loadingTimeout: 500,
    isLandingLayout: true,
  },

  {
    path: "signup",
    title: "Sign Up",
    element: <SignUp />,
    loadingTimeout: 500,
    isLandingLayout: true,
  },

  {
    path: "add",
    title: "Create New Blog",
    element: <Posts />,
    loadingTimeout: 500,
    isLandingLayout: true,
  },

  {
    path: "post/:id",
    title: "Our Blog",
    element: <Posts />,
    loadingTimeout: 1000,
    isLandingLayout: true,
  },

  {
    path: "profile/:id",
    title: "Profile",
    element: <UserProfile />,
    loadingTimeout: 1000,
    isLandingLayout: true,
  },

  {
    path: "search",
    title: "Find Your Blog",
    element: <Search />,
    loadingTimeout: 1000,
    isLandingLayout: true,
  },

  {
    path: "categories/:name",
    title: "",
    element: <Categories />,
    loadingTimeout: 0,
    isLandingLayout: true,
  },

  {
    path: "contact",
    title: "",
    element: <Contact />,
    loadingTimeout: 0,
    isLandingLayout: true,
  },

  {
    path: "*",
    title: "404 - Not Found",
    element: <NotFound />,
    loadingTimeout: 0,
    isLandingLayout: true,
  },

  {
    path: "test",
    title: "Test page",
    element: <Test />,
    loadingTimeout: 0,
    isLandingLayout: true,
  },
];
