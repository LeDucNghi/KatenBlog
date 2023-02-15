import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { postsApi } from "./api/postsApi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    postsApi.getAll().then((res) => console.log("res", res.data));
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<Navigate to="home" />} />

      <Route index path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
