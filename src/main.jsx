import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import DashboardPage from "./pages/DashboardPage";
import CheckoutPage from "./pages/CheckoutPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signup",
        element: <Signup />
      },

      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardPage /></PrivateRoute>

      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },

    ]
  }


]);


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);