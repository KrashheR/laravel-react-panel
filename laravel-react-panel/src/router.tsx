import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import GuestLayout from "./components/layouts/guestLayout/GuestLayout";
import UserLayout from "./components/layouts/userLayout/UserLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/users" />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/users",
        element: <Users />
      },
    ]
  },
  {
    path: "/",
    element: <NotFound />
  }
])

export default router;