import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faFlag } from '@fortawesome/free-solid-svg-icons'

const Player = ({player,handleSeclect}) => {
   const {name,country,image,allrounder,batting_style,hire_price,bowling_style}=player;
   
   
    return (
        <div className='col-span-1 border p-4 rounded-xl'>
            <img className='rounded-xl' src={image} alt="" />
            <h4 className='text-xl text-[#131313] font-semibold my-3 gap-3'> <FontAwesomeIcon icon={faUser} /> {name}</h4>
            <div className='flex justify-between mb-6'>
                <h5 className='text-base text-[#131313B3] font-normal gap-3'><FontAwesomeIcon icon={faFlag} /> {country}</h5>
                <button className='bg-[#1313130D] py-2 px-3 text-sm text-[#131313B3] font-normal rounded-md'>{allrounder?'all rounder':'N/A'}</button>
            </div> 
            <div className='flex justify-between'>
                <h5 className='text-lg text-[#131313] font-medium my-2'>Batting Style:</h5>
                <h5 className='text-base text-[#131313B3] font-normal my-2'>{batting_style}</h5>
            </div>
            <div className='flex justify-between'>
                <h5 className='text-lg text-[#131313] font-medium my-2'>Bowling Style:</h5>
                <h5 className='text-base text-[#131313B3] font-normal my-2'>{bowling_style}</h5>
            </div>
            <div className='flex justify-between'>
                <h5 className='text-base text-[#131313] font-medium '>Price:${hire_price}</h5>
                <button className='bg-[#1313130D] hover:bg-[#E7FE29] py-2 px-3 text-sm text-[#131313B3] font-normal rounded-md' onClick={()=>handleSeclect(player)}>Choose Player</button>
                
            </div>
        </div>
    );
};

export default Player;