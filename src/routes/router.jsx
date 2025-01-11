import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllVolunteerNeedPosts from './../pages/AllVolunteerNeedPosts';
import AddVolunteerNeedPost from './../pages/AddVolunteerNeedPost';
import ManageMyPosts from './../pages/ManageMyPosts';
import Login from './../pages/Login';
import Register from './../pages/Register';
import PrivateRoute from './PrivateRoute';
import VolunteerNeedPostDetails from "../pages/VolunteerNeedPostDetails";
import BeAVolunteer from "../pages/BeAVolunteer";
import UpdatePost from "../pages/UpdatePost";
import TenWays from "../pages/TenWays";
import EmmasStory from './../pages/EmmasStory';
import VolunteerProgram from './../pages/VolunteerProgram';
import HiddenBenefits from './../pages/HiddenBenefits';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('https://volun-force-server.vercel.app/posts')
        },
        {
            path: "/allVolunteerNeedPosts",
            element: <AllVolunteerNeedPosts></AllVolunteerNeedPosts>,
            // loader: ()=>fetch('https://volun-force-server.vercel.app/posts')
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/addVolunteerNeedPost",
            element: <PrivateRoute><AddVolunteerNeedPost></AddVolunteerNeedPost></PrivateRoute>,
        },
        {
            path: "/manageMyPosts",
            element: <PrivateRoute><ManageMyPosts></ManageMyPosts></PrivateRoute>,
            // loader: async() => {
            //     const [postData , beAVolunteerData] = await Promise.all([
            //         fetch('https://volun-force-server.vercel.app/posts').then(res => res.json()),
            //         fetch('https://volun-force-server.vercel.app/beAVolunteer').then(res => res.json()),
            //     ]);
            //     return {postData , beAVolunteerData};
            // }
        },
        {
            path: "/volunteerNeedPostDetails/:id",
            element: <PrivateRoute><VolunteerNeedPostDetails></VolunteerNeedPostDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://volun-force-server.vercel.app/posts/${params.id}`)
        },
        {
            path: "/beAVolunteer/:id",
            element: <PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
            loader: ({params})=>fetch(`https://volun-force-server.vercel.app/posts/${params.id}`)
        },
        {
            path: "/updatePost/:id",
            element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
            loader: ({params})=>fetch(`https://volun-force-server.vercel.app/posts/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/tenWays",
            element: <TenWays></TenWays>,
        },
        {
            path: "/emmasStory",
            element: <EmmasStory></EmmasStory>,
        },
        {
            path: "/volunteerProgram",
            element: <VolunteerProgram></VolunteerProgram>,
        },
        {
            path: "/hiddenBenefits",
            element: <HiddenBenefits></HiddenBenefits>,
        },
      ]
    },
  ]);

export default router ;