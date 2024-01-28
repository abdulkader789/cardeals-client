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
import CartPage from "./pages/CartPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./Layout/Main";
import Dashboard from "./Layout/Dashboard";
import Overview from "./components/AdminDashboard/Overview";
import CategorySection from "./components/AdminDashboard/Category/CategorySection";
import CategoryDetails from "./components/AdminDashboard/Category/CategoryDetails";
import { SidebarProvider } from "./context/SidebarContext";
import ProductSection from "./components/AdminDashboard/Product/ProductSection";
import CreateProduct from "./components/AdminDashboard/Product/CreateProduct";
import CreateCategory from "./components/AdminDashboard/Category/CreateCategory";
import Shop from "./pages/Shop";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";


import { SearchProvider } from "./context/SearchContext";
import SearchProduct from "./pages/SearchProduct";
import ProductDetails from "./components/ProductDetails";
import OrderPage from "./pages/OrderPage";
import { CartProvider } from "./context/CartContext";
import UserSection from "./components/AdminDashboard/User/UserSection";
import { UserProvider } from "./context/UserContext";
import UserDetails from "./components/AdminDashboard/User/UserDetails";
import { OrderProvider } from "./context/OrderContext";
import UserList from "./components/AdminDashboard/User/UserList";

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
        path: "/cart",
        element: <PrivateRoute><CartPage /></PrivateRoute>
      },
      {
        path: "/shop",
        element: <Shop />,

      },
      {
        path: "/shop/product/:id",
        element: <ProductDetails />,

      },
      {
        path: "/order/:id",
        element: <OrderPage />,

      },

      {
        path: "/search",
        element: <SearchProduct />
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
            path: "categorydetails/:slug", // This will render when the "/dashboard/test" route is accessed
            element: <CategoryDetails />
          },
          {
            path: "createcategory", // This will render when the "/dashboard/test" route is accessed
            element: <CreateCategory />
          },
          {
            path: "product", // This will render when the "/dashboard/test" route is accessed
            element: <ProductSection />
          },
          {
            path: "createproduct", // This will render when the "/dashboard/test" route is accessed
            element: <CreateProduct />
          },
          {
            path: "user",
            element: <UserSection />
          },
          {
            path: "userdetails/:id",
            element: <UserDetails />
          },
          {
            path: "userlist",
            element: <UserList />
          }
        ]

      },

    ]
  }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <OrderProvider>
        <UserProvider>
          <CartProvider>
            <SearchProvider>

              <ProductProvider>

                <AuthProvider>
                  <SidebarProvider>
                    <RouterProvider router={router} />
                  </SidebarProvider>
                </AuthProvider>

              </ProductProvider>

            </SearchProvider>
          </CartProvider>
        </UserProvider>
      </OrderProvider>
    </CategoryProvider>
  </React.StrictMode>
);