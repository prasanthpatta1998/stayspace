import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyContextProvider from "./utils/MyContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import useRouting from "./utils/useRouting.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <RouterProvider router={useRouting}/>
  </MyContextProvider>
);
