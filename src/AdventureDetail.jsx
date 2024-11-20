import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AdventureDetail = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const adventure=data.find(adventure=>adventure.id===id)
    console.log(adventure,data)
   
const{image,categoryName,shortDescription,adventureTitle,adventureLevel,adventureCost,bookingAvailability,location,duration,includedItems,
    specialInstructions}=adventure;

    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-7 text-orange-500">Adventure Details:{id}</h2>
            
           <p className="p-8">
           An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. 
            Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities.

           </p>

            <div className="hero min-h-screen w-11/12 mx-auto my-12 bg-green-200">
            
         
  <div className="hero-content flex-col  w-8/12 mx-auto">
    <img
      src={image}
      className=" w-[900px] h-54 rounded-lg shadow-2xl p-6" />
      
    <div>
      <h1 className="text-4xl font-bold text-black">{adventureTitle}</h1>
      <p className="py-6 text-orange-600">
        {shortDescription}
      </p>
      <p className="font-bold">Booking:{bookingAvailability}</p>
      <p className="font-bold">Location:{location}</p>
      <p  className="font-bold">Duration:{duration}</p>
      <p className="font-bold">Adventure-level:{adventureLevel}</p>
      <div className=" bg-red-100 flex p-7">

      <p className="font-bold">Included items:{
        includedItems.map(item=><li>{item}</li>)
        
        }</p>

        <p className="font-bold mr-18 mx-2">Special instructions:
            {
              specialInstructions.map(item=><li>{item}</li>)  
            }
        </p>
   
      </div>
      
      <p className="font-bold">Cost::{adventureCost}</p>
      <button className="btn bg-purple-600">Talk to More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdventureDetail;