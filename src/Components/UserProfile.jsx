import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const{user}=useContext(AuthContext);
    const navigate=useNavigate();
   const handleUpdate=()=>{
          navigate('/updateProfile')
   }
    return (
        <div>
        <div className="">
            <img className="w-40 mx-auto"
            src="https://th.bing.com/th?q=Woman+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=BD&setlang=en&adlt=moderate&t=1&mw=247"></img>

        </div>

       
  <div className="hero bg-base-200 my-4 p-6">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold">Welcome To Our Page{user.name}</h1>
      <p className="">
      
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="password" placeholder="Email" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button onClick={handleUpdate} className="btn btn-primary">Update Profile</button>
        </div>
      </form>
    </div>
  </div>
</div>


      </p>
      
    </div>
  </div>
</div>

        </div>
    );
};

export default UserProfile;

