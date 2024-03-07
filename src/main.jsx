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
import ProductDetails from "./components/AdminDashboard/Product/ProductDetails";
import OrderPage from "./pages/OrderPage";
import { CartProvider } from "./context/CartContext";
import UserSection from "./components/AdminDashboard/User/UserSection";
import { UserProvider } from "./context/UserContext";
import UserDetails from "./components/AdminDashboard/User/UserDetails";
import { OrderProvider } from "./context/OrderContext";
import UserList from "./components/AdminDashboard/User/UserList";
import OrderList from "./components/AdminDashboard/Order/OrderList";
import OrderDetails from "./components/AdminDashboard/Order/OrderDetails";
import UpdateCategory from "./components/AdminDashboard/Category/UpdateCategory";
import UpdateUser from "./components/AdminDashboard/User/UpdateUser";
import CreateUser from "./components/AdminDashboard/User/CreateUser";
import AdminPrivateRoute from "./components/AdminPrivateRoute";

import UpdateProduct from "./components/AdminDashboard/Product/UpdateProduct";
import AdminOverview from "./components/AdminDashboard/AdminOverview";
import UserPrivateRoute from "./components/UserPrivateRoute";
import UserOverview from "./components/UserDashboard/UserOverview";
import Profile from "./components/UserDashboard/Content/Profile";
import UpdateProfile from "./components/UserDashboard/Content/UpdateProfile";
import MobileNavContext, { MobileNavProvider } from "./context/MobileNavContext";

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
        element: <CartPage />
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
            path: "overview",
            element: <AdminPrivateRoute><AdminOverview /></AdminPrivateRoute>,

          },

          {
            path: "category", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><CategorySection /></AdminPrivateRoute>
          },
          {
            path: "categorydetails/:id", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><CategoryDetails /></AdminPrivateRoute>
          },
          {
            path: "createcategory", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><CreateCategory /></AdminPrivateRoute>
          },
          {
            path: "updatecategory/:id", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><UpdateCategory /></AdminPrivateRoute>
          },
          {
            path: "product", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><ProductSection /></AdminPrivateRoute>
          },
          {
            path: "createproduct", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><CreateProduct /></AdminPrivateRoute>
          },
          {
            path: "productdetails/:id", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><ProductDetails /></AdminPrivateRoute>
          },
          {
            path: "updateproduct/:id", // This will render when the "/dashboard/test" route is accessed
            element: <AdminPrivateRoute><UpdateProduct /></AdminPrivateRoute>
          },

          {
            path: "user",
            element: <AdminPrivateRoute><UserSection /></AdminPrivateRoute>
          },
          {
            path: "userdetails/:id",
            element: <AdminPrivateRoute><UserDetails /></AdminPrivateRoute>
          },
          {
            path: "userlist",
            element: <AdminPrivateRoute><UserList /></AdminPrivateRoute>
          },
          {
            path: 'updateuser/:id',
            element: <AdminPrivateRoute><UpdateUser /></AdminPrivateRoute>
          },
          {
            path: 'createuser',
            element: <AdminPrivateRoute><CreateUser /></AdminPrivateRoute>
          },
          {
            path: "orders",
            element: <AdminPrivateRoute><OrderList /></AdminPrivateRoute>
          },
          {
            path: "orderdetails/:id",
            element: <AdminPrivateRoute><OrderDetails /></AdminPrivateRoute>
          },

          {
            path: "useroverview",
            element: <UserPrivateRoute><UserOverview /></UserPrivateRoute>
          },
          {
            path: "userprofile",
            element: <UserPrivateRoute><Profile /></UserPrivateRoute>
          },
          {
            path: "userupdateprofile",
            element: <UserPrivateRoute><UpdateProfile /></UserPrivateRoute>
          }

        ]

      },

    ]
  }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileNavProvider>
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
    </MobileNavProvider>
  </React.StrictMode>
);