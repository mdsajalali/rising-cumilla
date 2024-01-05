import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DistrictNewsDetail from "./components/DistrictNewsDetail";
import Root from "./Root/Root";
import NewsCartDetail from "./components/NewsCartDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/districtNewsDetail/:id",
        element: <DistrictNewsDetail />,
      },
      {
        path: "/newsCartDetail/:id",
        element: <NewsCartDetail />,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
