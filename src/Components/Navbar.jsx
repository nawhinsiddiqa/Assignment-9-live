import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  
   
  const navigate = useNavigate();
 
      
  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div className="navbar bg-base-100 w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-blue-500 font-bold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/service"> Our Service</NavLink></li>
              <li><NavLink to="/service"> Features</NavLink></li>
              <li><NavLink to="/service"> About Doctor</NavLink></li>
              <li><NavLink to="/contact"> Contact</NavLink></li>




            </ul>
          </div>
          <a className=" text-xl">
            <img src="https://www.artificialeyebd.com/imagess/logo_2.png"></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold   text-blue-500">


            <li><NavLink to="/">Home</NavLink></li>

            <li><NavLink to="/service"> Our Service</NavLink></li>
            <li><NavLink to="/featureSection"> Features</NavLink></li>
            <li><NavLink to="/aboutDoctor"> About Doctor</NavLink></li>
            <li><NavLink to="/contact"> Contact</NavLink></li>




          </ul>

        </div>
        <div className="navbar-end">

          <h1 className='font-bold text-blue-400 text-xl'>Hotline:</h1>
          <br></br>
          <p className='text-red-600 font-bold'>+880171422511</p>
          


        </div>
      </div>


    </div>
  );
};

export default Navbar;