import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const{signInUser}=useContext(AuthContext);
  const navigate=useNavigate();
  const [success,setSuccess]=useState(false);
   const handleLogin=(e)=>{
       e.preventDefault();
       const email=e.target.email.value; 
       const password=e.target.password.value; 
       console.log(email,password)
       setSuccess(false);
       signInUser(email,password)
       .then(result=>{
        console.log(result.user)
        setSuccess(true)

       })
       navigate('/')

       .catch(error=>{
        console.log('ERROR',error.message)
        
       })
   }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      
    <h1 className="text-4xl font-bold mb-4">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="ml-4 mb-4 mr-4">
        Welcome to this website?please <Link to="/register">Register</Link>
      </p>
      {
        success && <p className="text-2xl bg-green-700">Successfully Login</p>
      }
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;