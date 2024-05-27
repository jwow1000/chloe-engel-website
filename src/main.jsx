import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./views/Root/Root.jsx";
import About from "./views/About/About.jsx";
import Rubber from "./views/Rubber/Rubber.jsx"; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "rubber",
        element: <Rubber />
      }

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals