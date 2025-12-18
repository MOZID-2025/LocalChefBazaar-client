import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Meals from "../Pages/Meals/Meals";
import MealDetails from "../Pages/Meals/MealDetails";
import PrivateRoute from "./PrivateRoute";
import MealReviews from "../Pages/Meals/MealReviews";
import OrderPage from "../Pages/OrderPage/OrderPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCanceled from "../Pages/Dashboard/Payment/PaymentCanceled";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyReview from "../Pages/Dashboard/MyReview/MyReview";
import FavoriteMeal from "../Pages/Dashboard/FavouriteMeal/FavoriteMeal";
import BeAChief from "../Pages/BeAChief.jsx/BeAChief";
import ApprovedChief from "../Pages/Dashboard/ApprovedChief/ApprovedChief";
import UsersManagement from "../Pages/Dashboard/UsersManagment/UsersManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/meals"),
      },
      {
        path: "chief",
        element: (
          <PrivateRoute>
            <BeAChief></BeAChief>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/meals",
        Component: Meals,
        loader: () => fetch("http://localhost:3000/meals"),
      },
      {
        path: "/mealDetails/:id",
        element: (
          <PrivateRoute>
            <MealDetails></MealDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.id}`),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.id}`)
            .then((res) => res.json())
            .then((data) => data.result),
      },

      {
        path: "/meals/:id/reviews",
        element: <MealReviews />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.id}`).then((res) =>
            res.json()
          ),
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myorder",
        Component: MyOrder,
      },
      {
        path: "payment/:orderId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-canceled",
        Component: PaymentCanceled,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "my-review",
        Component: MyReview,
      },
      {
        path: "favourite-meal",
        Component: FavoriteMeal,
      },
      {
        path: "approve-chief",
        Component: ApprovedChief,
      },
      {
        path: "users-management",
        Component: UsersManagement,
      },
    ],
  },
]);
