/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
const ServicePage = ({viewData}) => {
  if(!viewData){
    return null;
  }
   const {name,id,image,price,short_description,desc}  = viewData 
  return (
        <div>

          <div className="hero w-5/6 bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image}className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{desc}</p>
      <NavLink to="/booked" className="btn bg-[#FE612C]">Book Now</NavLink>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ServicePage;