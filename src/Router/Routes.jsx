import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import TodayTask from "../Page/Dashboard/TodayTask";
import AllTask from "../Page/Dashboard/AllTask";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <Home /> },
      ]
   },
   { path: '/login', element: <Login /> },
   { path: '/register', element: <Register /> },
   {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
         {
            path: 'today-tasks',
            element: <TodayTask/>
         },
         {
            path: 'all-tasks',
            element: <AllTask/>
         },

      ]
   },
])

export default myCreatedRoutes