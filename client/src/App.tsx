import "react-quill/dist/quill.snow.css";
import "./assets/styles/globalStyles.scss";

import { Router } from "./routes";

function App() {
  console.log = function () {};

  return <Router />;
}

export default App;
