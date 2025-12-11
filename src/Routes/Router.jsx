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

      // {
      //   path: "/",
      //   element: <PrivateRoute></PrivateRoute>,
      // },
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
]);
