import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVolunteerNeedPosts from './../pages/AllVolunteerNeedPosts';
import AddVolunteerNeedPost from './../pages/AddVolunteerNeedPost';
import ManageMyPosts from './../pages/ManageMyPosts';
import Login from './../pages/Login';
import Register from './../pages/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/allVolunteerNeedPosts",
            element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
        },
        {
            path: "/addVolunteerNeedPost",
            element: <AddVolunteerNeedPost></AddVolunteerNeedPost>,
        },
        {
            path: "/manageMyPosts",
            element: <ManageMyPosts></ManageMyPosts>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
      ]
    },
  ]);

export default router ;