import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { auth } from "../firebase.init";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";



const Login = () => {
  const emailRef=useRef();
  const{signInUser, signInWithGoogle}=useContext(AuthContext);
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
         toast('successfully Login')
       e.target.reset();
        
       })

       setTimeout(()=>{
        navigate('/')
      },1000)
     
       
      

       .catch(error=>{
        console.log('ERROR',error.message)
        
       })
   }
   const handlePassword=()=>{
    console.log('get me email address',emailRef.current.value);
    const email=emailRef.current.value;
    if(!email){
      console.log('please valid email address')
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert(' Password Reset email,please check your email')
      })
    }
   }
   const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>console.log(error.message))
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
          <input type="email"
           name="email" ref={emailRef}
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name="password" 
          
          placeholder="password" className="input input-bordered" required />
          <label 
          onClick={handlePassword}
          className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="ml-4 mb-4 mr-4 font-bold">
        Welcome to this website?please <Link to="/register">Register</Link>

      </p>
      <p>
        <button
        onClick={handleGoogleSignIn}
        className="btn bg-slate-500 w-full mx-auto text-black">Google</button>
      </p>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;