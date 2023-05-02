import "react-quill/dist/quill.snow.css";
import "./assets/styles/globalStyles.scss";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Footer } from "./components/Common/Footer/Footer";
import { Header } from "./components/Common/Header/Header";
import { Loading } from "./components/Common/Loading/Loading";
import NotFound from "./components/Common/NotFound/NotFound";
import { ProfileHeader } from "./components/Common/Header/ProfileHeader";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Test } from "./pages/test/test";
import { UserProfile } from "./pages/Profile/UserProfile";

function App() {
  const { pathname } = useLocation();

  const Home = lazy(() => import("./pages/Home/Home"));
  const AddEditBlog = lazy(() => import("./pages/AddEditBlog/AddEditBlog"));
  const Search = lazy(() => import("./pages/Search/Search"));

  return (
    <>
      {pathname !== "/profile" ? <Header /> : <ProfileHeader />}

      <Routes>
        <Route index path="/" element={<Navigate to="home" />} />

        <Route
          index
          path="home"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />

        <Route index path="signup" element={<SignUp />} />

        <Route index path="signin" element={<SignIn />} />

        <Route
          index
          path="add"
          element={
            <Suspense>
              <AddEditBlog />
            </Suspense>
          }
        />

        <Route
          index
          path="search"
          element={
            <Suspense>
              <Search />
            </Suspense>
          }
        />

        <Route
          index
          path="post/:id"
          element={
            <Suspense>
              <AddEditBlog />
            </Suspense>
          }
        />

        <Route
          index
          path="profile/:id"
          element={
            <Suspense>
              <UserProfile />
            </Suspense>
          }
        />

        <Route
          index
          path="test"
          element={<Test direction="horizontal" shape="circle" />}
        />

        <Route index path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
