import {createBrowserRouter, Navigate} from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import CustomerLayout from "./components/CustomerLayout";
import GuestLayout from "./components/GuestLayout";
import SellerLayout from "./components/SellerLayout";
import NotFound from "./views/NotFound";
import Register from "./views/guest/Register";
import Login from "./views/guest/Login";
import GuestDashboard from "./views/guest/GuestDashboard";
import CustomerDashboard from "./views/customer/CustomerDashboard";
import SellerDashboard from "./views/seller/SellerDashboard";
import AdminDashboard from "./views/admin/AdminDashboard";
import Shop from "./views/guest/Shop";
import SelectedProduct from "./components/inc/SelectedProduct";
import Blog from "./views/guest/Blog";
import Cart from "./components/inc/Cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/home",
                element: <GuestDashboard />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/product/:id",
                element: <SelectedProduct />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <AdminDashboard />
            }
        ]
    },
    {
        path: "/",
        element: <SellerLayout />,
        children: [
            {
                path: "/seller",
                element: <SellerDashboard />
            }
        ]
    },
    {
        path: "/",
        element: <CustomerLayout />,
        children: [
            {
                path: "/customer",
                element: <CustomerDashboard />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;