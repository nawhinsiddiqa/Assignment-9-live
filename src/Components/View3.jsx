import React from 'react';
import img1 from'../assets/b-3112014135155188-service3_1.jpg'
import img2 from'../assets/b-3112014135155188-service3_2.jpg'
const View3 = () => {
    return (
        <div>
            <div>
                <h1 className='p-8 text-2xl font-bold'>
                   Relinable children ocular prosthesis
                    <div className="divider divider-primary">children ocular prosthesis</div>
                </h1>
                <div className='flex w-9/12 mx-auto'>
                    <img className="w-96 p-10 rounded-full" src={img1}></img>
                    <p className='mt-20 text-xl'>
                    
In case of growing child patients we provide relinable children ocular prosthesis which is adjust several year with out making new prosthesis

                      .</p>
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

export default View3;