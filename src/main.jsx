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
import PrivateRoute from './component/firebase/PrivateRoute';
import ErrorPage from './component/errorPage/ErrorPage';
import BookNow from './component/bookNow/BookNow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <PrivateRoute>

          <About></About>
        </PrivateRoute>
        ,
      },
      {
        path: "/services",
        element:<ServicePage></ServicePage>,
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
        path: "/booked",
        element: <PrivateRoute>
          <BookNow></BookNow>
        </PrivateRoute>,
      },
      {
        path: "/datas/:id",
    element: <PrivateRoute>

      <Details></Details>
    </PrivateRoute>,
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
