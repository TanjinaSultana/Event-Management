/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import CardService from "../card-service/CardService";
import Banner from "../banner/Banner";



const Service = () => {
    const [dataSet,setDataSet]  = useState([]);
 
    useEffect(() =>{
      fetch("data.json")
      .then(res=>res.json())
      .then(data=>setDataSet(data))
  },[])
    return (
        <div>
        <h1 className="text-center text-2xl font-bold mt-5">Our <span className="text-[#FFA500] ">Services</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {
            dataSet?.map(data=>(

                <CardService key={data.id} data={data}></CardService>
                
            
            ) )
        }
        </div>
        </div>
    );
};

export default Service;