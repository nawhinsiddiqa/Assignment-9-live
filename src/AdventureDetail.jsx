import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AdventureDetail = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const adventure=data.find(adventure=>adventure.id===id)
    console.log(adventure,data)
   
const{image,categoryName,shortDescription,adventureCost,bookingAvailability,location,duration,includedItem,
    specialInstructions}=adventure;

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-7">Adventure Details:{id}</h2>
            <img className="h-[166px]" src={image} alt=""/>
        </div>
    );
};

export default AdventureDetail;