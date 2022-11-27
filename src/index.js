import Home from './pages/Home/home.pages'
import Plases from './pages/Plases/plases.component';
import Hotels from './pages/Hotels/hotels.component';
import Restaurants from './pages/FoodAndDrink/foodAndDirnk.component';
import GettingHere from './pages/GettingHere/gettingHere.component'
import ErrorPage from "./error-page";
import Grid from './grid';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Grid/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "attraction",
        element: <Plases />,
      },
      {
        path: "stay",
        element: <Hotels/>,
      },
      {
        path: "food",
        element: <Restaurants/>,
      },
      {
        path: "getting-here",
        element: <GettingHere/>,
      },
    ],
  },

]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
