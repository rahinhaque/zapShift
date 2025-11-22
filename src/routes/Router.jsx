import { createBrowserRouter } from "react-router";
import { lazy } from "react";

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
        path: "#",
        Component: Error,
      },
    ],
  },
]);
