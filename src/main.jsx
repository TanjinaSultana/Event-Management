import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './component/root/Root';
import Home from './component/home/Home';
import About from './component/about/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicePage from './component/servicePage/ServicePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
