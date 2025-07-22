import {createBrowserRouter} from "react-router";
import HomePage from "../Component/HomePage/HomePage";
import Layout from "../Component/Layout/Layout";
import HowItWork from "../Pages/HowItWork/HowItWork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/how-it-works",
        element: <HowItWork></HowItWork>,
      }
    ]
  },
  

]);

export default router;