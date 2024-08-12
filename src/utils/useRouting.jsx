import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Signup from "../components/Signup";
import Login from "../components/Login";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../components/ErrorPage";

const useRouting = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <ProtectedRoute element={<Checkout />} />,
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

export default useRouting;
