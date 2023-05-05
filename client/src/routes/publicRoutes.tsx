import * as React from "react";

import { Route, RouteObject, Routes } from "react-router-dom";

import CustomSuspense from "../components/Common/Suspense/CustomSuspense";
import { Loading } from "../components/Common/Loading/Loading";
import NotFound from "../components/Common/NotFound/NotFound";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";

const Home = React.lazy(() => import("../pages/Home/Home"));
const AddEditBlog = React.lazy(
  () => import("../pages/AddEditBlog/AddEditBlog")
);
const Search = React.lazy(() => import("../pages/Search/Search"));
const UserProfile = React.lazy(() => import("../pages/Profile/UserProfile"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <CustomSuspense timeoutMs={3000} fallback={<Loading />}>
        <Home />
      </CustomSuspense>
    ),
  },

  {
    path: "signin",
    element: <SignUp />,
  },

  {
    path: "signup",
    element: <SignIn />,
  },

  {
    path: "add",
    element: (
      <CustomSuspense timeoutMs={3000} fallback={<Loading />}>
        <AddEditBlog />
      </CustomSuspense>
    ),
  },

  {
    path: "post/:id",
    element: (
      <CustomSuspense timeoutMs={3000} fallback={<Loading />}>
        <AddEditBlog />
      </CustomSuspense>
    ),
  },

  {
    path: "profile/:id",
    element: (
      <CustomSuspense timeoutMs={3000} fallback={<Loading />}>
        <UserProfile />
      </CustomSuspense>
    ),
  },

  {
    path: "search",
    element: (
      <CustomSuspense timeoutMs={3000} fallback={<Loading />}>
        <Search />
      </CustomSuspense>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export const PublicRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
