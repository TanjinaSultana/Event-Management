import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServicePage from "../servicePage/ServicePage"

const Details = () => {
    const [viewData,setviewData]=  useState({});
    const {id} =  useParams();
    const data =  useLoaderData()
    useEffect(()=>{
        const remainData =  data?.find((item) => item.id  == id );
        setviewData(remainData);
    },[id,data])
    return (
        <div>
           
            <ServicePage viewData={viewData}></ServicePage>
        </div>
    );
};

export default Details;