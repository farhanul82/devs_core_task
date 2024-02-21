import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={Router} />
  </React.StrictMode>
);
