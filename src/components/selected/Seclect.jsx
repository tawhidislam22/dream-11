import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Seclect = ({sec,removePlayer}) => {
    const {image,name,batting_style}=sec;
    
    return (
            <div className='flex justify-between p-5 border rounded-xl items-center my-6'>
            <div className='flex  items-center gap-4'>
            <img className='w-20 rounded-lg' src={image} alt="" />
            <div>
            <h4 className='text-xl text-[#131313] font-bold mb-3'>{name}</h4>
            <h4 className='text-base text-[#13131399] font-normal'>{batting_style}</h4>
            </div>
            </div>
            <div>
                <button className='bg-[#1313130D] py-2 px-3 text-lg text-[#F14749] font-normal rounded-md' onClick={()=>removePlayer(sec)}><FontAwesomeIcon icon={faTrash} /></button>
                
            </div>
            </div>
        
    );
};

export default Seclect;