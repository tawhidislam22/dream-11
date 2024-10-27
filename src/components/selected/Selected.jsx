import React from 'react';
import Seclect from './seclect';

const Selected = (props) => {
    
    return (
        <div className='w-11/12 space-y-4 mx-auto'>
            
            <div>
            {
                props.seclect.map(sec=><Seclect key={sec.rating} removePlayer={props.removePlayer}  sec={sec}></Seclect>)
            }
            </div>
            <div className='p-2 border border-[#E7FE29] rounded-xl w-fit'>
            <button onClick={()=>props.addActive(true)} className='bg-[#E7FE29] p-3 rounded-xl text-base text-[#131313] font-medium '>Add More Player</button>
            </div>
        </div>
    );
};

export default Selected;