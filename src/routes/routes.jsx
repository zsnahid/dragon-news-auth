import { createBrowserRouter } from "react-router-dom";
import Center from "../components/Center";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/news/categories"),
        children: [
          {
            path: "",
            element: <Center />,
            loader: () =>
              fetch(
                "https://openapi.programming-hero.com/api/news/category/01"
              ),
          },
          {
            path: "/category/:id",
            element: <Center />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);
