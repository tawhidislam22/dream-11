import React, {  useEffect, useState } from 'react';
import Player from './Player';

const Players = ({handleSeclect}) => {
    const [players,setPlayers]=useState([]);
    
    useEffect(()=>{
        fetch('./players.json')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    },[])
    

    return (
        <div className=' w-11/12 mx-auto my-8'>
            
               <div  className='grid grid-cols-3 content-start gap-4'>
                {
                players.map(player=><Player handleSeclect={handleSeclect} key={player.rating} player={player}></Player>)
                }
               </div>

        </div>
    );
};

export default Players;