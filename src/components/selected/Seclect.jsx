import React from 'react';

const Seclect = ({sec}) => {
    const {image,name,batting_style}=sec;
    return (
        <div className='flex justify-between p-5 border rounded-xl items-center'>
            <div className='flex  items-center gap-4'>
            <img className='w-20 rounded-lg' src={image} alt="" />
            <div>
            <h4>{name}</h4>
            <h4>{batting_style}</h4>
            </div>
            </div>
            <div>
                <button>delete</button>
            </div>
        </div>
    );
};

export default Seclect;