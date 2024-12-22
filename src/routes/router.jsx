import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <div>Hello world!</div>,
        }
      ]
    },
  ]);

export default router ;