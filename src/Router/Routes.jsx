import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Page/Error/ErrorPage";
import Home from "../Page/Home/Home";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <Home /> },
      ]
   },
])

export default myCreatedRoutes