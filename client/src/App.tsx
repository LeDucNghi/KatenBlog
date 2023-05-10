import "react-quill/dist/quill.snow.css";
import "./assets/styles/globalStyles.scss";

import { useLocation, useParams } from "react-router-dom";

import { Footer } from "./components/Common/Footer/Footer";
import { Header } from "./components/Common/Header/Header";
import { ProfileHeader } from "./components/Common/Header/ProfileHeader";
import { Router } from "./routes/router";

function App() {
  const { pathname } = useLocation();
  const { id } = useParams();
  console.log("🚀 ~ file: App.tsx:14 ~ App ~ id:", id);

  return (
    <>
      {pathname !== `/profile/${id}` ? <Header /> : <ProfileHeader />}

      <Router />

      <Footer />
    </>
  );
}

export default App;
