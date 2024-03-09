
// import {
//     createBrowserRouter,

// } from "react-router-dom";
// import "./index.css";
// import HomePage from "./pages/HomePage";
// import ErrorPage from "./error-page";
// import ContactPage from "./pages/ContactPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import AboutPage from "./pages/AboutPage";
// import CartPage from "./pages/CartPage";
// import Main from "./Layout/Main";
// import OrderPage from "./pages/OrderPage";
// import ShopPage from "./pages/ShopPage";
// import SearchProduct from "./pages/SearchProduct";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// // import ProductDetails from "./components/AdminDashboard/Product/ProductDetails";


// // import PrivateRoute from "./components/PrivateRoute";
// // import Dashboard from "./Layout/Dashboard";
// // import CategorySection from "./components/AdminDashboard/Category/CategorySection";
// // import CategoryDetails from "./components/AdminDashboard/Category/CategoryDetails";
// // import ProductSection from "./components/AdminDashboard/Product/ProductSection";
// // import CreateProduct from "./components/AdminDashboard/Product/CreateProduct";
// // import CreateCategory from "./components/AdminDashboard/Category/CreateCategory";
// // import UserSection from "./components/AdminDashboard/User/UserSection";
// // import UserDetails from "./components/AdminDashboard/User/UserDetails";
// // import UserList from "./components/AdminDashboard/User/UserList";
// // import OrderList from "./components/AdminDashboard/Order/OrderList";
// // import OrderDetails from "./components/AdminDashboard/Order/OrderDetails";
// // import UpdateCategory from "./components/AdminDashboard/Category/UpdateCategory";
// // import UpdateUser from "./components/AdminDashboard/User/UpdateUser";
// // import CreateUser from "./components/AdminDashboard/User/CreateUser";
// // import AdminPrivateRoute from "./components/AdminPrivateRoute";
// // import UpdateProduct from "./components/AdminDashboard/Product/UpdateProduct";
// // import AdminOverview from "./components/AdminDashboard/AdminOverview";
// // import UserPrivateRoute from "./components/UserPrivateRoute";
// // import UserOverview from "./components/UserDashboard/UserOverview";
// // import Profile from "./components/UserDashboard/Content/Profile";
// // import UpdateProfile from "./components/UserDashboard/Content/UpdateProfile";
// // import MobileNavContext, { MobileNavProvider } from "./context/MobileNavContext";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main />,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 path: "/",
//                 element: <HomePage />
//             },
//             {
//                 path: "/home",
//                 element: <HomePage />
//             },
//             {
//                 path: "/contact",
//                 element: <ContactPage />
//             },
//             {
//                 path: "/signup",
//                 element: <SignupPage />
//             },

//             {
//                 path: "/login",
//                 element: <LoginPage />
//             },
//             {
//                 path: "/about",
//                 element: <AboutPage />
//             },

//             {
//                 path: "/cart",
//                 element: <CartPage />
//             },
//             {
//                 path: "/shop",
//                 element: <ShopPage />,

//             },
//             {
//                 path: "/shop/product/:id",
//                 element: <ProductDetailsPage />,

//             },
//             {
//                 path: "/order/:id",
//                 element: <OrderPage />,

//             },

//             {
//                 path: "/search",
//                 element: <SearchProduct />
//             },


//         ]
//     },
// {
//     path: "/dashboard",
//     element: <PrivateRoute><Dashboard /></PrivateRoute>,
//     children: [

//         {
//             path: "overview",
//             element: <AdminPrivateRoute><AdminOverview /></AdminPrivateRoute>,

//         },

//         {
//             path: "category", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><CategorySection /></AdminPrivateRoute>
//         },
//         {
//             path: "categorydetails/:id", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><CategoryDetails /></AdminPrivateRoute>
//         },
//         {
//             path: "createcategory", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><CreateCategory /></AdminPrivateRoute>
//         },
//         {
//             path: "updatecategory/:id", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><UpdateCategory /></AdminPrivateRoute>
//         },
//         {
//             path: "product", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><ProductSection /></AdminPrivateRoute>
//         },
//         {
//             path: "createproduct", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><CreateProduct /></AdminPrivateRoute>
//         },
//         {
//             path: "productdetails/:id", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><ProductDetails /></AdminPrivateRoute>
//         },
//         {
//             path: "updateproduct/:id", // This will render when the "/dashboard/test" route is accessed
//             element: <AdminPrivateRoute><UpdateProduct /></AdminPrivateRoute>
//         },

//         {
//             path: "user",
//             element: <AdminPrivateRoute><UserSection /></AdminPrivateRoute>
//         },
//         {
//             path: "userdetails/:id",
//             element: <AdminPrivateRoute><UserDetails /></AdminPrivateRoute>
//         },
//         {
//             path: "userlist",
//             element: <AdminPrivateRoute><UserList /></AdminPrivateRoute>
//         },
//         {
//             path: 'updateuser/:id',
//             element: <AdminPrivateRoute><UpdateUser /></AdminPrivateRoute>
//         },
//         {
//             path: 'createuser',
//             element: <AdminPrivateRoute><CreateUser /></AdminPrivateRoute>
//         },
//         {
//             path: "orders",
//             element: <AdminPrivateRoute><OrderList /></AdminPrivateRoute>
//         },
//         {
//             path: "orderdetails/:id",
//             element: <AdminPrivateRoute><OrderDetails /></AdminPrivateRoute>
//         },

//         {
//             path: "useroverview",
//             element: <UserPrivateRoute><UserOverview /></UserPrivateRoute>
//         },
//         {
//             path: "userprofile",
//             element: <UserPrivateRoute><Profile /></UserPrivateRoute>
//         },
//         {
//             path: "userupdateprofile",
//             element: <UserPrivateRoute><UpdateProfile /></UserPrivateRoute>
//         }

//     ]

// },


// ]);



// export default router;


import { createBrowserRouter } from "react-router-dom";

import Main from "./Layout/Main";

import HomePage from "./pages/HomePage";


const routes = [
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePage /> },

        ],
    },
];

export default routes;
