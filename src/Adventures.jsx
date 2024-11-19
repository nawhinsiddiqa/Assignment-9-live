   
   import Adventure from "./Adventure";
   import { useState,useEffect } from "react";


   const Adventures = () => {
    const [adventures,setAdventures]=useState([]);
    useEffect(()=>{
        fetch('./fakeFileData.json')
        .then(res=>res.json())
        .then(data=>setAdventures(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-black text-center my-8">Adventures Experience Section</h1>
           
            <h1 ></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
                {
                    adventures.map(adventure=><Adventure adventure={adventure} key={adventure.id} ></Adventure>)
                }
            </div>
        </div>
    );
   };
   
   export default Adventures;
