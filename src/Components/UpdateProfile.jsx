import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
  const{user}=useContext(AuthContext)
  
    const handleLogin=e=>{
      e.preventDefault();
      const email=e.target.email.value;
      const photo=e.target.photo.value;
      console.log(email,photo)
    }

    const navigate=useNavigate();
    const handleUpdate=()=>{
           navigate('/userProfile')
    }
    return (
        <div>
          <Helmet>
            <title>Update Profile</title>
          </Helmet>
          <div>


          <h1 className="text-center text-3xl font-bold text-black my-5">My Update Profile</h1>
          </div>

          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={handleLogin}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        <button onClick={handleUpdateProfile} className="btn btn-ghost text-center">Update information</button>
        </div>
      </form>
    </div>
  </div>
</div>



 
</div>
    );
};

export default UpdateProfile;