import {createBrowserRouter, Navigate} from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import CustomerLayout from "./components/CustomerLayout";
import GuestLayout from "./components/GuestLayout";
import SellerLayout from "./components/SellerLayout";
import AdminLogin from "./views/guest/AdminLogin";
import NotFound from "./views/NotFound";
import Register from "./views/guest/Register";
import Login from "./views/guest/Login";
import GuestDashboard from "./views/guest/GuestDashboard";
import CustomerDashboard from "./views/customer/CustomerDashboard";
import SellerDashboard from "./views/seller/SellerDashboard";
import AdminDashboard from "./views/admin/AdminDashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/master",
                element: <AdminLogin />
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
                path: "/dashboard",
                element: <GuestDashboard />
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