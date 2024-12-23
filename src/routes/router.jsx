import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllVolunteerNeedPosts from './../pages/AllVolunteerNeedPosts';
import AddVolunteerNeedPost from './../pages/AddVolunteerNeedPost';
import ManageMyPosts from './../pages/ManageMyPosts';
import Login from './../pages/Login';
import Register from './../pages/Register';
import PrivateRoute from './PrivateRoute';
import VolunteerNeedPostDetails from "../pages/VolunteerNeedPostDetails";
import BeAVolunteer from "../pages/BeAVolunteer";
import UpdatePost from "../pages/UpdatePost";

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
            element: <PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>,
        },
        {
            path: "/manageMyPosts",
            element: <PrivateRoute><ManageMyPosts></ManageMyPosts></PrivateRoute>,
        },
        {
            path: "/volunteerNeedPostDetails",
            element: <PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>,
        },
        {
            path: "/beAVolunteer",
            element: <PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
        },
        {
            path: "/updatePost",
            element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
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