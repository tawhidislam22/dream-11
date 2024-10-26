import React from 'react';
import bgImage from '../../assets/images/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className='w-11/12 mx-auto bg-black rounded-xl text-center p-20'
              style={{background:`url(${bgImage})`}}
        >
            
            <h2 className='text-[#131313] text-4xl font-bold mt-8 mb-4'>Subscribe to our Newsletter</h2>
            <p className='text-xl text-[#131313B3] font-normal mb-5'>Get the latest updates and news right in your inbox!</p>
            <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
            </div>
        </div>
            
    );
};

export default Newsletter;