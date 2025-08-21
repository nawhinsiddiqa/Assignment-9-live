import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='lg:p-8 text-2xl font-bold p-22'>
                Contact Address
                <div className="divider divider-primary"></div>
            </h1>
            <div className='flex w-6/12 mx-auto p-4 lg:p-6 '>

                <div className=''>

                    <h2 className='font-bold text-2xl text-blue-800 mt-5'>
                        Prostho Dental</h2>
                    <h2></h2>
                    Flat # B4, House # 43, Road # 27<br></br>
                    (nando's & UCB bank building,<br></br>
                    opposite meena bazer), Dhanmondi, Dhaka<br></br>
                    <span className='font-bold'>Phone: </span>+880 171 445 2219<br></br>
                    <span className='font-bold'>  E-mail: </span>mamund27@yahoo.com<br></br>
                
                    <span className='font-bold'> Web:</span>   www.artificialeyebd.com               </div>
                <div className='ml-6'>
                    <div class="card bg-base-100 shrink-0 shadow-2xl">
                         <p className="mb-4 font-bold text-2xl">Your Query</p>
                        <div class="card-body">
                           
                            <fieldset class="fieldset">
                                <label class="label">Email</label>
                                <input type="email" class="input" placeholder="Email" />
                                <label class="label">Password</label>
                                <input type="password" class="input" placeholder="Password" />
                                <div><a class="link link-hover">Forgot password?</a></div>
                                <button class="btn btn-neutral mt-4">send</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

        </div>












    );
};

export default Contact;