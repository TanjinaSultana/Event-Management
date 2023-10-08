/* eslint-disable react/prop-types */


const ServicePage = ({viewData}) => {
  if(!viewData){
    return null;
  }
   const {name,id,image,price,short_description,desc}  = viewData 
  return (
        <div>
          <div className="hero w-[800px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image}className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{desc}</p>
      <button className="btn bg-[#FE612C]">Book Now</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ServicePage;