

const UpdateProfile = () => {
    return (
        <div>
          <div>


          <h1 className="text-center text-3xl font-bold text-black my-5">My Update Profile</h1>
          </div>

          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-ghost text-center">Update information</button>
        </div>
      </form>
    </div>
  </div>
</div>



 
</div>
    );
};

export default UpdateProfile;