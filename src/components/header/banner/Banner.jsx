import React from 'react';
import bannerImage from '../../../assets/images/banner-main.png'
import bgImage from '../../../assets/images/bg-shadow.png'




const Banner = ({handleAddCoin}) => {
   
    
    return (
        <div className='w-11/12 mx-auto bg-black rounded-xl text-center'
        >
            <div className='p-20 bg rounded-xl'  >
            <img className='mx-auto w-4/5 md:w-fit' src={bannerImage} alt="" />
            <h1 className='text-[#FFFFFF] text-2xl md:text-4xl font-bold mt-8 mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-base md:text-xl text-[#FFFFFFB3] font-normal mb-5'>Beyond Boundaries Beyond Limits</p>
            <div className='p-2 border border-[#E7FE29] rounded-xl w-fit mx-auto'>
            <button onClick={handleAddCoin}
                className='bg-[#E7FE29] p-3 rounded-xl text-base text-[#131313] font-medium '>Claim Free Credit</button>
            
            
               </div>
            </div>
            
        </div>
    );
};

export default Banner;