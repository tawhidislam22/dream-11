import React, { useState } from 'react';
import Players from '../players/Players';
import Selected from '../selected/Selected';
import { toast } from 'react-toastify';


const Utlitiles = ({playerPrice,removePlayerPrice,addCoin}) => {
    const [active,setActive]=useState(true);
    const [seclect,setSeclect]=useState([]);
    const handleActive= active=>{
        const newActive=!active;
        setActive(newActive);
    }
    const addActive=on=>{
        const newActive=on;
        setActive(newActive);
    }
    const handleSeclect=player=>{
        
        const available=seclect.find(p=>p.rating==player.rating)
        if(available){
            toast.warn(`Already ${player.name} is Available in your squad`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                
                });
        }else{
            if(player.hire_price<=addCoin){
                if(seclect.length<6){
                    
                    playerPrice(player.hire_price);
                    const newSeclect=[...seclect,player];
                     setSeclect(newSeclect)
                     toast.success(`Congrates !! ${player.name} is Added in your Squad`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                        });
                    
                }
                else{
                    toast.warn('You are not added more', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                        });
                }
            }else{
                toast.warn('You have not enough money added this player', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                
                    });
            }
        }
    }
    
    const removePlayer=player=>{
        
        removePlayerPrice(player.hire_price);
        const newSeclects=seclect.filter(p=>p.rating!=player.rating)
        setSeclect(newSeclects);
        toast.warn('Remove Player', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
       
    }
    
    
    return (
        <div>
            <div className='flex justify-between items-center py-4 w-11/12 mx-auto'>
                {
                    active?<h4 className='text-lg md:text-2xl text-[#131313] font-semibold'>Available Players</h4>:<h4 className='text-2xl text-[#131313] font-semibold'>Selected Player ({seclect.length}/6)</h4>
                }
                <div className='flex '>
                    <button onClick={()=>handleActive(active)} className={active?'bg-[#E7FE29] p-2 md:p-3 rounded-l-lg text-[#131313] text-base font-medium':'none bg-[#FFFFFF] p-3 text-[#131313] text-sm md:text-base font-medium' }>Available</button>
                    <button onClick={()=>handleActive(active)} className={!active?'bg-[#E7FE29] p-2 md:p-3 rounded-r-lg text-[#131313] text-base font-medium':'none bg-[#FFFFFF] p-3 text-[#131313] text-sm md:text-base font-medium'}>Selected ({seclect.length})</button>
                </div>
            </div>
            {
                active?<Players handleSeclect={handleSeclect} ></Players>:<Selected seclect={seclect} removePlayer={removePlayer} addActive={addActive}></Selected>
            }
            
                

        </div>
    );
};

export default Utlitiles;