import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
