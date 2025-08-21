import React from 'react';
import img1 from '../assets/b-3112014141610441-service4_1.jpg'
import img2 from '../assets/b-3112014141610441-service4_2.jpg'
const View4 = () => {
    return (
        <div>
           <div>
                           <h1 className='p-8 text-2xl font-bold'>
                               Custom Made Conformer
                               <div className="divider divider-primary">Conformer</div>
                           </h1>
                           <div className='flex w-9/12 mx-auto'>
                               <img className="w-96 p-10 rounded-full" src={img1}></img>
                               <p className='mt-20 text-xl'>
                                   Before
           
           
           
                                   After
           
                                   After exenteration surgery due to accident,<br></br> cancer of patients,disfiguring involved not only eye its also involved <br></br>eye lid, eye brow and even bony structure of eye in that case we provide custom made eye including eye lid, eye brow( similar to skin color). .</p>
                           </div>
                           <span className='ml-60 mb-10 text-xl font-bold text-blue-600'> Before</span>
           
           
                           <div className='flex w-9/12 mx-auto'>
                               <img className="w-96 p-10 rounded-full" src={img2}></img>
                           </div>
                           <span className='ml-60 mb-10 text-xl font-bold text-blue-600 mb-9'> After</span>
           
                       </div> 
        </div>
    );
};

export default View4;