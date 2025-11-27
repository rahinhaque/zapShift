import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendPercel from "../pages/Send Parcel/SendPercel";

const RootLayout = lazy(() => import("../layouts/RootLayout"));
const Home = lazy(() => import("../pages/home/home/Home"));
const Coverage = lazy(() => import("../pages/Coverage/Coverage"));
const AboutUs = lazy(() => import("../pages/About us/AboutUs"));
const Error = lazy(() => import("../pages/Error/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/send-percel",
        element: (
          <PrivateRoute>
            <SendPercel></SendPercel>
          </PrivateRoute>
        )
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "#",
        Component: Error,
      },
    ],
  },
  {
    path: "/",
    Component: Authlayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
