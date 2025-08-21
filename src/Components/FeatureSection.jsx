import React from 'react';
import img1 from '../assets/2112014145032207.jpg'
const FeatureSection = () => {
    return (
        <div>

            <div>
                <h1 className='p-8 text-2xl font-bold'>
                    Features
                    <div className="divider divider-primary"></div>
                </h1>

                <div className='flex w-9/12 mx-auto gap-7'>
                    <img className="rounded-xl mb-5" src={img1}></img>
                    <p className="mb-8">
                        <span className='text-2xl font-bold'></span><p></p>


                        We provides international standard custom made ocular prosthesis,orbital prosthesis,<br></br> custom made conformer, relinable child ocular prosthesis and other maxillofacial prosthesis.

                        At artificial eye clinic, Custom Ocular Prosthetics patient satisfaction is not just our goal, it is our mission. Thus we make the prosthesis by taking custom impression of eye socket individually fabricated to fit the size and shape of the eye, replacement of life like veining, color matching with opposite eye. Due to its custom fit and excellent finish this prosthesis can be worn continuously for months together without need of frequent removal. Custom fitting of prosthesis also allows the best possible movement in the artificial eye.


                        {/* <br></br>          <button onClick={handle} className='btn bg-blue-600 mt-4 hover:bg-black text-white'> More</button> */}

                    </p>

                </div>
                <div className='w-9/12 mx-auto'>
                    <p className='p-5 text-blue-800 text-2xl'>Why you chose custom made eye in rather than ready made eye</p>
                    1. Custom made Prepared according to patient's socket measurement but ready made are readily available in market.<br></br>
                    2. Custom made eye Made by  PMMA (UK, German) but ready made eye made by low grade plastic<br></br>
                    3. Size, Shape, color are same as natural eye but in ready made is not possible<br></br>
                    4. More eye movement in compare to ready made eye<br></br>
                    5. Modifications are possible to solve problems like Ptosis, proptosis and socket expansion without surgery in custom made eye but modification is not possible in ready made eye.<br></br>
                  <p className='text-2xl mt-7 text-blue-800'> Why need Maxillofacial Prosthodontist or Ocularist for custom made prostheses?</p>
                  <p className='mb-20'>Maxillofacial Prosthetics is a sub branch of Prosthodontics in dentistry where concerns about fabrication of custom made eye, facial, orbital, nasal, ear and other intra oral prosthesis. So, if you need better services you have to need a qualified maxillofacial prosthodontist.
</p>
                </div>

            </div>
        </div>
    );
};

export default FeatureSection;