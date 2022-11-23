import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ArtworkPage } from "./pages/ArtworkPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/:id",
      element: <ArtworkPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
