import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

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
])

export default myCreatedRoutes