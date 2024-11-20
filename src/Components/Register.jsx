import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaEye ,FaEyeSlash} from "react-icons/fa";

import { auth } from "../firebase.init";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const[success,setSuccess]=useState(false);
  const[errorMessage,setErrorMessage]=useState('');
  const[showPassword,setShowPassword]=useState(false);

  const navigate=useNavigate();
    const {createUser,signInWithGoogle}=useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const photo=e.target.photo.value;
        const terms=e.target.terms.checked;

        console.log(name,email,password,photo,terms)
        // reset error
        setErrorMessage('');
        setSuccess(false);
        if(!terms){
          setErrorMessage('Please accept our terms and conditions')
          return
        }

        if(password.length<6){
          setErrorMessage('Password should be given at least six character or longer');
             return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)){
            setErrorMessage('At least one uppercase,one lower case and length 6 character')
            return;
        }


        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            setSuccess(true);
            sendEmailVerification(auth.currentUser)
            .then(()=>{
              console.log('verification email sent')
            })
            // navigate('/')
            e.target.reset()
        })
        .catch(error=>{
            console.log('ERROR',error.message)
            setErrorMessage(error.message);
            setSuccess(false)
        })
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
            <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      
    <h1 className="text-4xl font-bold mb-4">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

      <form onSubmit={handleRegister} className="card-body">
        
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="name" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"  name="photo" placeholder="photo" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
            
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" 
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showPassword?'text':'password'}  
          name="password" placeholder="password" className="input input-bordered" required />
          <button onClick={()=>setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-4 top-12">
            {
              showPassword ?<FaEyeSlash /> :<FaEye/>
            }
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
  <label className="label cursor-pointer">
  <input type="checkbox" name="terms" className="checkbox" />
    <span className="label-text">Accept Our Terms And Conditions</span>
    
  </label>
</div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      
      
      <p className="ml-4 mb-4 mr-4 font-bold">
        Already Have an account?please
         <Link to="/login">Login</Link>.
      </p>
      <p>
        <button
        onClick={handleGoogleSignIn}
        className="btn bg-slate-500 w-full mx-auto text-black">Google</button>
      </p>
      {
        errorMessage && <p className="text-red-700 p-4">{errorMessage}</p>
      }
      {
        success && <p className="text-green-700 p-4">Successfully Registered.</p>
      }
    </div>
  </div>
</div>
            
        </div>
        </div>
    );
};

export default Register;