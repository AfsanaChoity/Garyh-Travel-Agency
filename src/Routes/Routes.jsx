import { createBrowserRouter } from "react-router";
import HomePage from "../Component/HomePage/HomePage";
import Layout from "../Component/Layout/Layout";
import HowItWork from "../Pages/HowItWork/HowItWork";
import Explore from "../Pages/Explore/Explore";
import Booking from "../Pages/Booking/Booking";
import About from "../Pages/About/About";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import CheckYourEmail from "../Pages/CheckYourEmail/CheckYourEmail";
import SetNewPassword from "../Pages/SetNewPassword/SetNewPassword";
import PasswordReset from "../Pages/PasswordReset/PasswordReset";
import BookingCheckout from "../Pages/ContinueBooking/BookingCheckout";
import ConfirmBooking from "../Pages/ConfirmBooking/ConfirmBooking";
import ProtectedRoute from "./ProtectedRoute";

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
        element: (
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        )
      },
      {
        path: "/booking-checkout",
        element: (
          <ProtectedRoute>
            <BookingCheckout></BookingCheckout>
          </ProtectedRoute>
        )

      },
      {
        path: "/booking-confirm",
        element: (
          <ProtectedRoute>
             <ConfirmBooking></ConfirmBooking>
          </ProtectedRoute>
        )
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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/check-your-email",
    element: <CheckYourEmail></CheckYourEmail>,
  },
  {
    path: "/set-new-password",
    element: <SetNewPassword></SetNewPassword>,
  },
  {
    path: "/password-reset",
    element: <PasswordReset></PasswordReset>,
  }



]);

export default router;