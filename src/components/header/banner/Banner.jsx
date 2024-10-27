import React from 'react';
import bannerImage from '../../../assets/images/banner-main.png'
import bgImage from '../../../assets/images/bg-shadow.png'
import { ToastContainer, toast } from 'react-toastify';




const Banner = ({handleAddCoin}) => {
   
    const success=()=>{
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
            handleAddCoin()
    }
    return (
        <div className='w-11/12 mx-auto bg-black rounded-xl text-center'
        >
            <div className='p-20'  style={{background:`url(${bgImage})`}}>
            <img className='mx-auto ' src={bannerImage} alt="" />
            <h1 className='text-[#FFFFFF] text-4xl font-bold mt-8 mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl text-[#FFFFFFB3] font-normal mb-5'>Beyond Boundaries Beyond Limits</p>
            <div className='p-2 border border-[#E7FE29] rounded-xl w-fit mx-auto'>
            <button onClick={()=>{
                success()
                
            }}
                className='bg-[#E7FE29] p-3 rounded-xl text-base text-[#131313] font-medium '>Claim Free Credit</button>
            
            <ToastContainer
/>
               </div>
            </div>
            
        </div>
    );
};

export default Banner;