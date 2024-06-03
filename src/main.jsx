import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./views/Root/Root.jsx";
import About from "./views/About/About.jsx";
import Home from "./views/Home/Home.jsx";
import Projects from "./views/Projects/Projects.jsx"; 
import {Rubber, IWant} from "./views/Projects/projectIdx.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
console.log('RUUBBBER', Rubber)
const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/rubber",
        element: <Rubber />
      },
      {
        path: "projects/IWantToBe",
        element: <IWant />
      },
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