import React from 'react';
import bgImage from '../../assets/images/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className='absolute -top-72 md:-top-64 left-4 md:left-12 w-11/12 p-3 border-2 mx-auto rounded-xl'>
            <div className=' bg-[#FFFFFF] rounded-xl'>
            <div className='bg rounded-xl text-center p-12 md:p-20 '
              
        >
            
            <h2 className='text-[#131313] text-2xl md:text-4xl font-bold mt-8 mb-4'>Subscribe to our Newsletter</h2>
            <p className='text-sm md:text-xl text-[#131313B3] font-normal mb-5'>Get the latest updates and news right in your inbox!</p>
            <div className='space-x-4 space-y-2'>
            <input className='p-3 text-base text-[#13131366] font-normal rounded-lg border' type="email" placeholder='Enter your email' />
            <button className='p-3 rounded-lg text-base text-[#131313] font-semibold bg-gradient-to-r from-purple-200 to-orange-300'>Subscribe</button>
            </div>
        </div>
        </div>
        </div>
            
    );
};

export default Newsletter;