import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import routes from './routes'
import AppProviders from "./AppProviders";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>

  </React.StrictMode>
);
