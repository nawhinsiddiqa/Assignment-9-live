import React from 'react';
import img1 from '../assets/22201911527913.jpg'
const AboutDoctor = () => {
    return (
        <div>
            <h1 className='p-8 text-2xl font-bold'>
            About Doctor
                <div className="divider divider-primary"></div>
            </h1>
            <div className="card card-side bg-base-100 shadow-sm w-9/12 mx-auto p-12">
                <figure>
                    <img
                        src={img1}
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title font-bold mb-2">
                        Prof. Dr. Md. Saiful Islam Mamun</h2>
                    <p>BDS (DU), GDCSc (Bangkok)<br></br>
                        ATCC (NYU), PGT(Thailand)</p>
                    <p className='font-semibold'>Head, Dept of Prosthodontics<br></br>
                        University Dental College and Hospital, Dhaka<br></br></p>
                    <span className='mt-3'> Consultant and Maxillofacial Prosthodontist, Artificial Eye Clinic, Dhaka.<br></br>

                        He is a certified maxillofacial prosthodontist in Bangladesh</span>.





                </div>

            </div>
            <div className='text-center mb-14'>
                He has been completed his post graduation in maxillofacial prosthetics from Mahidol University, Bangkok, Thailand.Over the years at this center<br></br> he has developed excellent skills and work xtremely hard tofine-tune every small detail in the prosthetic eye to make it comfortable and lifelike.
            </div>
        </div>
    );
};

export default AboutDoctor;