import React from 'react';
import bannerImage from '../../../assets/images/banner-main.png'
import bgImage from '../../../assets/images/bg-shadow.png'

const Banner = ({handleAddCoin}) => {
    return (
        <div className='w-11/12 mx-auto bg-black rounded-xl text-center'
        >
            <div className='p-20'  style={{background:`url(${bgImage})`}}>
            <img className='mx-auto ' src={bannerImage} alt="" />
            <h1 className='text-[#FFFFFF] text-4xl font-bold mt-8 mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl text-[#FFFFFFB3] font-normal mb-5'>Beyond Boundaries Beyond Limits</p>
            <button onClick={handleAddCoin}  className='bg-[#E7FE29] p-3 rounded-xl'>Claim Free Credit</button>
            </div>
            
        </div>
    );
};

export default Banner;