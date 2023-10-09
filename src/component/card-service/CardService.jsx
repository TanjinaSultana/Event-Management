/* eslint-disable react/prop-types */

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

const CardService = ({data}) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
if(!data){
  return null;
}

  const {id,name,price,image,short_description} = data;

 
    return (
        <div>
           
             <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-duration="1000">
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-2xl">{name}</h2>
    <p className="font-normal text-xl">${price}</p>
    <p className="font-normal text-xl">{short_description}</p>
    <div className="card-actions">
      <NavLink to={`/datas/${id}`} className="btn bg-[#FE612C] text-white" >View Details</NavLink>
    </div>
  </div>
</div> 
        </div>
    );
};

export default CardService;