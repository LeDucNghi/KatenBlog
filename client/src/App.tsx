import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { AddEditBlog } from "./pages/AddEditBlog/AddEditBlog";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import postsApi from "./api/postsApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    postsApi.getAll().then((res) => console.log("res", res.data));
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Navigate to="home" />} />

      <Route index path="home" element={<Home />} />

      <Route index path="signup" element={<SignUp />} />

      <Route index path="signin" element={<SignIn />} />

      <Route index path="edit" element={<AddEditBlog />} />
    </Routes>
  );
}

export default App;
