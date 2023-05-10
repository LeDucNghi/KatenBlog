import "react-quill/dist/quill.snow.css";
import "./assets/styles/globalStyles.scss";

import { Footer } from "./components/Common/Footer/Footer";
import { Header } from "./components/Common/Header/Header";
import { ProfileHeader } from "./components/Common/Header/ProfileHeader";
import { Router } from "./routes/router";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/profile" ? <Header /> : <ProfileHeader />}

      <Router />

      <Footer />
    </>
  );
}

export default App;
