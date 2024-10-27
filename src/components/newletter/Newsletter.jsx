import React from 'react';
import bgImage from '../../assets/images/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className=''>
            <div className='w-11/12 mx-auto rounded-xl text-center p-20 '
              style={{background:`url(${bgImage})`}}
        >
            
            <h2 className='text-[#131313] text-4xl font-bold mt-8 mb-4'>Subscribe to our Newsletter</h2>
            <p className='text-xl text-[#131313B3] font-normal mb-5'>Get the latest updates and news right in your inbox!</p>
            <div className='space-x-4'>
            <input className='p-3 text-base text-[#13131366] font-normal rounded-lg border' type="email" placeholder='Enter your email' />
            <button className='p-3 rounded-lg text-base text-[#131313] font-semibold bg-gradient-to-r from-purple-200 to-orange-300'>Subscribe</button>
            </div>
        </div>
        </div>
            
    );
};

export default Newsletter;