import React, { useState } from 'react';
import Players from '../players/Players';
import Selected from '../selected/Selected';

const Utlitiles = ({playerPrice}) => {
    const [active,setActive]=useState(true);
    const [seclect,setSeclect]=useState([]);
    const handleActive= active=>{
        const newActive=!active;
        setActive(newActive);
    }
    const handleSeclect=player=>{
        playerPrice(player.hire_price);
        const newSeclect=[...seclect,player];
        setSeclect(newSeclect)
    }

    return (
        <div>
            <div className='flex justify-between items-center py-4 w-11/12 mx-auto'>
                {
                    active?<h4>Available Players</h4>:<h4>Selected Player ({seclect.length}/6)</h4>
                }
                <div className='flex'>
                    <button onClick={()=>handleActive(active)} className={active?'bg-[#E7FE29] p-3 rounded-l-lg':'none bg-[#FFFFFF] p-3'}>Available</button>
                    <button onClick={()=>handleActive(active)} className={!active?'bg-[#E7FE29] p-3 rounded-r-lg':'none bg-[#FFFFFF] p-3'}>Selected ({seclect.length})</button>
                </div>
            </div>
            {
                active?<Players handleSeclect={handleSeclect} ></Players>:<Selected seclect={seclect}></Selected>
            }
        </div>
    );
};

export default Utlitiles;