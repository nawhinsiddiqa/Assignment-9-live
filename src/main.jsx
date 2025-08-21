import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './Components/ErrorPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Root from './Components/Root';
import Home from './Components/Home';
import Service from './Components/Service'
import AboutDoctor from './Components/AboutDoctor';




import View1 from './Components/View1';
import View2 from './Components/View2'
import View3 from './Components/View3';
import View4 from './Components/View4';

import Contact from './Components/Contact';
import FeatureSection from './Components/FeatureSection';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

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
        path:'/service',
        element:<Service></Service>
      },
      
       {
        path:'/view1',
        element:<View1></View1>
      },
       {
        path:'/view2',
        element:<View2></View2>
      },
       {
        path:'/view3',
        element:<View3></View3>
      },
       {
        path:'/view4',
        element:<View4></View4>
      },
       {
        path:'/featureSection',
        element:<FeatureSection></FeatureSection>
      },

    
      {
        path:'/aboutDoctor',
        element:<AboutDoctor></AboutDoctor>
      },
      
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
   
    
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    
        <RouterProvider router={router} />
       
        <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
