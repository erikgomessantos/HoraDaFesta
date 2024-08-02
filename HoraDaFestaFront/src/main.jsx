import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import CreateUsers from "./routes/CreateUsers";
import Users from "./routes/Users";
import UsersDetails from "./routes/UsersDetails";
import EditUsers from "./routes/EditUsers";
import CreateParty from "./routes/CreateParty";
import Party from "./routes/Party";
import EditParty from "./routes/EditParty";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { 
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/new",
        element: <CreateUsers />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <UsersDetails />,
      },
      {
        path: "/users/edit/:id",
        element: <EditUsers />,
      },
      {
        path: "/party/new",
        element: <CreateParty />,
      },
      {
        path: "/party/:id",
        element: <Party />,
      },
      {
        path: "/party/edit/:id",
        element: <EditParty />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);