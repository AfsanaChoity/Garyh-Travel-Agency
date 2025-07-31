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
import Inbox from "../Pages/Inbox/Inbox";
import TravelerLayout from "../Component/Layout/TravelerLayout";
import TravelerDashboard from "../Pages/TravelerDashboard/TravelerDashboard";
import MyBooking from "../Pages/MyBooking/MyBooking";
import MyBookingDetails from "../Pages/MyBookingDetails/MyBookingDetails";
import SavedSpot from "../Pages/SavedSpot/SavedSpot";
import ProfileSetting from "../Pages/ProfileSetting/ProfileSetting";
import TravelerORLandOwner from "../Pages/SignUp/TravelerORLandOwner/TravelerORLandOwner";
import LandingPage from "../LandOwnerPages/LandingPage";
import LandOwnerLayout from "../LandOwnerComponents/LandOwnerLayout/LandOwnerLayout";
import LandHowItWorks from "../LandOwnerPages/LandHowItWorks";
import ContactUs from "../LandOwnerPages/ContactUs";
import LandExplore from "../LandOwnerPages/LandExplore";
import LandDetails from "../LandOwnerPages/LandDetails";
import LandOwnerDashboardLayout from "../LandOwnerComponents/LandOwnerLayout/LandOwnerDashboardLayout";
import LandOwnerOverview from "../LandOwnerPages/LandOwnerOverview";
import ManageBooking from "../LandOwnerPages/ManageBooking";
import LandReviews from "../LandOwnerPages/LandReviews";
import LandOwnerEarning from "../LandOwnerPages/LandOwnerEarning";
import LandownerSettings from "../LandOwnerPages/LandownerSettings";
import MyListing from "../LandOwnerPages/MyListing";

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
      {
        path: "/inbox",
        element: (
          <ProtectedRoute>
            <Inbox></Inbox>
          </ProtectedRoute>
        )
      },
      {
        path: "/my-booking/details",
        element: (
          <ProtectedRoute>
            <MyBookingDetails></MyBookingDetails>
          </ProtectedRoute>
        )
      }


    ]
  },
  {
    path: "/welcome",
    element: <TravelerORLandOwner></TravelerORLandOwner>,
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
  },
  {
    path: "/dashboard",
    element: <TravelerLayout></TravelerLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <TravelerDashboard></TravelerDashboard>
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/my-booking",
        element: (
          <ProtectedRoute>
            <MyBooking></MyBooking>
          </ProtectedRoute>
        )
      },
      {
        path: "/dashboard/saved-spot",
        element: (
          <ProtectedRoute>
            <SavedSpot></SavedSpot>
          </ProtectedRoute>
        )
      },
      {
        path: "/dashboard/profile-setting",
        element: (
          <ProtectedRoute>
            <ProfileSetting></ProfileSetting>
          </ProtectedRoute>
        )
      }
    ]
  },

  // Paths for LandOwner
  {
    path: "/landowner",
    element: <ProtectedRoute>
      <LandOwnerLayout></LandOwnerLayout>
    </ProtectedRoute>,
    children: [
      {
        path: "/landowner",
        element: <ProtectedRoute>
          <LandingPage></LandingPage>
        </ProtectedRoute>
      },
      {
        path: "/landowner/how-it-works",
        element: <ProtectedRoute>
          <LandHowItWorks></LandHowItWorks>
        </ProtectedRoute>,
      },
      {
        path: "/landowner/contact-us",
        element: <ProtectedRoute>
          <ContactUs></ContactUs>
        </ProtectedRoute>,
      },
      {
        path: "/landowner/explore",
        element: <ProtectedRoute>
          <LandExplore></LandExplore>
        </ProtectedRoute>,
      },
      {
        path: "/landowner/details",
        element: <ProtectedRoute>
          <LandDetails></LandDetails>
        </ProtectedRoute>,
      },
    ]
  },

  // Paths for LandOwner Dashboard
  {
    path: "/overview",
    element: <ProtectedRoute>
      <LandOwnerDashboardLayout></LandOwnerDashboardLayout>
    </ProtectedRoute>,
    children: [
      {
        path: "/overview",
        element: (
          <ProtectedRoute>
           <LandOwnerOverview></LandOwnerOverview>
          </ProtectedRoute>
        ),
      },

      {
        path: "/overview/my-listing",
        element: (
          <ProtectedRoute>
          <MyListing></MyListing>
          </ProtectedRoute>
        ),
      },

      {
        path: "/overview/manage-booking",
        element: (
          <ProtectedRoute>
          <ManageBooking></ManageBooking>
          </ProtectedRoute>
        ),
      },
      {
        path: "/overview/reviews",
        element: (
          <ProtectedRoute>
          <LandReviews></LandReviews>
          </ProtectedRoute>
        ),
      },
       {
        path: "/overview/earnings",
        element: (
          <ProtectedRoute>
          <LandOwnerEarning></LandOwnerEarning>
          </ProtectedRoute>
        ),
      },
      {
        path: "/overview/settings",
        element: (
          <ProtectedRoute>
          <LandownerSettings></LandownerSettings>
          </ProtectedRoute>
        ),
      },

    ]
  }



]);

export default router;