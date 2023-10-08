import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Root from './component/root/Root';
import Home from './component/home/Home';
import About from './component/about/About';
import Login from './component/login/Login';
import Register from './component/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ServicePage from './component/servicePage/ServicePage';
import Details from './component/details/Details';
import AuthProvider from './component/firebase/AuthProvider';
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
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/datas/:id",
    element: <Details></Details>,
    loader: ()=>fetch('/data.json')
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
