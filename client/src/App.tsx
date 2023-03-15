import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { Footer } from "./components/Common/Footer/Footer";
import { Header } from "./components/Common/Header/Header";
import { Loading } from "./components/Common/Loading/Loading";
import { Profile } from "./models";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { getCookie } from "typescript-cookie";
import postsApi from "./api/postsApi";

function App() {
  useEffect(() => {
    postsApi.getAll().then((res) => console.log("res", res.data));

    const information: Profile = JSON.parse(getCookie("information")!);
    console.log(
      "🚀 ~ file: App.tsx:20 ~ useEffect ~ information:",
      information
    );
  }, []);

  const Home = lazy(() => import("./pages/Home/Home"));
  const AddEditBlog = lazy(() => import("./pages/AddEditBlog/AddEditBlog"));

  return (
    <>
      <Header />

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
            <Suspense fallback={<Loading />}>
              <AddEditBlog />
            </Suspense>
          }
        />

        <Route
          index
          path="post/:id"
          element={
            <Suspense fallback={<Loading />}>
              <AddEditBlog />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
