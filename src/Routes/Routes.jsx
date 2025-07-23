import { createBrowserRouter } from "react-router";
import HomePage from "../Component/HomePage/HomePage";
import Layout from "../Component/Layout/Layout";
import HowItWork from "../Pages/HowItWork/HowItWork";
import Explore from "../Pages/Explore/Explore";
import Booking from "../Pages/Booking/Booking";
import About from "../Pages/About/About";
import SignUp from "../Pages/SignUp/SignUp";

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
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/explore",
        element: <Explore></Explore>,

      },
      {
        path: "/how-it-works",
        element: <HowItWork></HowItWork>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

    ]
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
  },


]);

export default router;