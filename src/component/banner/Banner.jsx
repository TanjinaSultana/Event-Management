/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Banner = () => {
  
    return (
        <div>
    <div className="hero h-[570px] " style={{backgroundImage: "url(https://i.ibb.co/3vrqr94/istockphoto-1340256496-170667a.webp)"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Your <span className="text-[#FFA500]">Dream Event</span>, Our Expertise</h1>
      <p className="mb-5">Turning Dreams into Reality By Taking Our Service.We works with customer satisfaction.</p>
      <NavLink to="/about" className="btn btn-primary bg-[#FE612C] border-none">Explore More</NavLink>
    </div>
  </div>
</div>
    </div>
        
    );
};

export default Banner;