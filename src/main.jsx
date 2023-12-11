import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './home/Home';
// import About from './about/About';
// import Contact from './contact/Contact';
import AboutMe from './about/AboutMe';
import ContactMe from './navbar/ContactMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<AboutMe></AboutMe>
      },
      {
        path:"/contactme",
        element:<ContactMe></ContactMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
