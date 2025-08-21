import React from 'react';
import { useNavigate } from 'react-router-dom';
const Service = () => {
      const navigate = useNavigate()

    const handleClick = () => {
        navigate('/view1')
    }

    const handleClick1=()=>{
        navigate('/view2')
    }
    const handleClick2=()=>{
        navigate('/view3')
    }
    const handleClick3=()=>{
        navigate('/view4')
    }
    return (
        <div>
            <h1 className="pl-8 mt-7 text-xl font-bold">  Our Service</h1>
            <div className="divider divider-info"></div>

            <div className='lg: grid grid-cols-2 md:grid-cols-2 grid-cols-1 p-6 mx-auto'>
                <div className="card bg-blue-500 text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='mt-10 text-2xl font-semibold'>Custom Made Ocular Prosthesis</p>
                        <div className="">
                            <button onClick={handleClick}className="btn text-blue-500">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-500 text-primary-content w-96">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='mt-12 text-2xl font-semibold'>Orbital Prosthesis</p>
                        <div className="card-actions">
                            <button onClick={handleClick1} className="btn text-blue-500">View More</button>
                        </div>
                    </div>
                </div>


                <div className="card bg-blue-500 text-primary-content w-96 mt-9">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='mt-112 text-2xl font-semibold'>Relinable children ocular prosthesis</p>
                        <div className="card-actions">
                            <button onClick={handleClick2}className="btn text-blue-500">View More</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-blue-500 text-primary-content w-96 mt-8">
                    <div className="card-body">
                        <h2 className="card-title"></h2>
                        <p className='mt-12 text-2xl font-semibold'>Custom Made Conformer</p>
                        <div className="card-actions">
                            <button onClick={handleClick3} className="btn text-blue-500">View More</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Service;