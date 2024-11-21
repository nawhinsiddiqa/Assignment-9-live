import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";

import { toast } from "react-toastify";
import { auth } from "./firebase.init";
import { Helmet } from "react-helmet-async";
const ForgetPassword = () => {

    const emailRef=useRef();

    const handleForm=(e)=>{
     e.preventDefault();
     const email=e.target.email.value;
     const password=e.target.password.value;
    }

    const handleForgetPassword=()=>{
        console.log('get me email address',emailRef.current.value);
        const email=emailRef.current.value;
    
        if(!email){
            console.log('please provide a valid email address')
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                toast(' Password Reset email sent,please check your email')
            })
        }
    }
    return (
        <div>
          <Helmet>
            <title>Forget Password</title>
          </Helmet>
           <h1 className=" text-3xl font-bold text-center my-6" >Forget Password</h1> 

           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={handleForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button onClick={handleForgetPassword} className="btn btn-primary">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ForgetPassword;