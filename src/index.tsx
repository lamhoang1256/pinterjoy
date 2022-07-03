import React from "react";
import ReactDOM from "react-dom/client";
import App from "App/App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "assets/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
);
