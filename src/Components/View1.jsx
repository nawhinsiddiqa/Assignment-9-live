import React from 'react';
import img1 from '../assets/b-2112014145953575-service1_1.jpg'
import img2 from '../assets/b-211201415014269.jpgservice1_2.jpg'
const View1 = () => {

    return (
        <div>
            <h1 className='p-8 text-2xl font-bold'>
                Custom Made Ocular Prosthesis
                <div className="divider divider-primary">Ocular Prosthesis</div>
            </h1>
            <div className='flex w-9/12 mx-auto'>
                <img className="w-96 p-10 rounded-full" src={img1}></img>
                <p className='mt-20 text-xl'>Make the prosthesis by taking custom impression of eye socket <br></br>individually fabricated to fit the size and shape of the eye,<br></br> replacement of life like veining, color matching with opposite eye.<br></br> So looks like natural eye, having movements and no side effects.</p>
            </div>
            <span className='ml-60 mb-10 text-xl font-bold text-blue-600'> Before</span>


            <div className='flex w-9/12 mx-auto'>
                <img className="w-96 p-10 rounded-full" src={img2}></img>
            </div>
            <span className='ml-60 mb-10 text-xl font-bold text-blue-600 mb-9'> After</span>

        </div>
    );
};

export default View1;