import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './Components/ErrorPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AdventureDetail from './AdventureDetail';
import AuthProvider from './Components/Providers/AuthProvider';
import FirstStep from './FirstStep';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/adventures/:id',
        element:<AdventureDetail></AdventureDetail>,
        loader:()=>fetch('/fakeFileData.json')
      },
      {
        path:'/firstStep',
        element:<FirstStep></FirstStep>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </StrictMode>,
)
