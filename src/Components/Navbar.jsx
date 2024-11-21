import React from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {

  const {user,signOutUser}=useContext(AuthContext);
  console.log(user)
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      toast('User Sign Out Successfully')
      navigate('/login')
    })
    .catch(error=>console.log('ERROR',error.message))
  }
    return (
        <div>
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
        <li><NavLink to="login">Login</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>
        <li><NavLink to="/userProfile">UserProfile</NavLink></li>
        <li><NavLink to="/updateProfile">UpdateProfile</NavLink></li>
        
        
      </ul>
    </div>
    <a className=" text-xl">
        <img src="https://travelwp.physcode.com/main-demo/wp-content/uploads/sites/7/2023/07/logo-black.png"></img>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-blue-500">
      
      
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
       {
        user && <>
        
        <li><NavLink to="/userProfile">UserProfile</NavLink></li>
        <li><NavLink to="/updateProfile">UpdateProfile</NavLink></li>
        
        </>
       }
      
       
      
    </ul>
   
  </div>
  <div className="navbar-end">
  <CgProfile />
  {
    user ? <>
    <span>{user.email}</span>
    <a  onClick={handleSignOut} className='btn'>Sign Out</a>
    </>
     :
    <Link to="/login">Login</Link>
  }
  </div>
</div>

            
        </div>
    );
};

export default Navbar;