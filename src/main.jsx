import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ErrorPage from "./error-page";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import CheckoutPage from "./pages/CheckoutPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./Layout/Main";
import Dashboard from "./Layout/Dashboard";
import Overview from "./components/Dashboard/Overview";
import CategorySection from "./components/Dashboard/Category/CategorySection";
import CategoryList from "./components/Dashboard/Category/CategoryList";

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
        path: "/checkout",
        element: <PrivateRoute><CheckoutPage /></PrivateRoute>
      },

      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [

          {
            path: "",
            element: <Overview />

          },
          {
            path: "category", // This will render when the "/dashboard/test" route is accessed
            element: <CategorySection />
          },
          {
            path: "categorylist", // This will render when the "/dashboard/test" route is accessed
            element: <CategoryList />
          }
        ]

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