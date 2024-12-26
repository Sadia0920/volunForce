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
            loader: ()=>fetch('http://localhost:5000/posts')
        },
        {
            path: "/allVolunteerNeedPosts",
            element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
            // loader: ()=>fetch('http://localhost:5000/posts')
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
            path: "/volunteerNeedPostDetails/:id",
            element: <PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
        },
        {
            path: "/beAVolunteer/:id",
            element: <PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
        },
        {
            path: "/updatePost/:id",
            element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
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