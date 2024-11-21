import { Link } from "react-router-dom";

const NextLevel = () => {
    return (
        <div className="relative" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
         <h1 className="text-5xl font-bold text-center my-6 text-black">Join Our NewsLetter</h1>
        
         <img className="w-[1200px] mx-auto my-9 h-96" src="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-salty-oceans_1.png?itok=bOjaEkcu&c=a75e254fe1da31f2732f6b0d7bce1413"></img>
        


        

        <div className="card bg-base-100 w-96 shadow-xl mx-auto bg-orange-400 my-5 absolute bottom-4 right-2">
  <div className="card-body">
    <h2 className="card-title text-3xl text-center font-bold">Subscribe & Get 20% off!!!</h2>
    <div className="card-actions justify-end">
    <p className="text-center my-7 p-3">Join our newsletter and discover new destinations to inspire the<br>
            </br>
             traveler within. Plus, get 20% off at our online shop. Every week <br></br>
             you’ll receive expert advice, tips, exclusive offers, and much more</p>
             <input  className="rounded p-5" type="text" placeholder="Your Email Address"></input>

      <Link to="/register"><button className="btn btn-ghost bg-slate-400">Sign Up</button></Link>
    </div>
  </div>
</div>

        
        </div>
    );
};

export default NextLevel;