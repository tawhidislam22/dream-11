import React from 'react';
import Seclect from './seclect';

const Selected = (props) => {
    console.log(props.seclect)
    return (
        <div className='w-11/12 space-y-4 mx-auto'>
            
            {
                props.seclect.map(sec=><Seclect key={sec.rating} sec={sec}></Seclect>)
            }
        </div>
    );
};

export default Selected;