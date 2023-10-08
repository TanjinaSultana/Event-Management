/* eslint-disable react/prop-types */


import { NavLink } from "react-router-dom";

const CardService = ({data}) => {
if(!data){
  return null;
}

  const {id,name,price,image,short_description} = data;


    return (
        <div>
           
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>${price}</p>
    <p>{short_description}</p>
    <div className="card-actions">
      <NavLink to={`/datas/${id}`} className="btn bg-[#FE612C] text-white">View Details</NavLink>
    </div>
  </div>
</div> 
        </div>
    );
};

export default CardService;