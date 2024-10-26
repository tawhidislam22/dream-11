import React from 'react';

const Player = ({player,handleSeclect}) => {
   const {name,country,image,allrounder,batting_style,hire_price}=player;
   
    return (
        <div className='col-span-1 border p-4 rounded-xl'>
            <img className='rounded-xl' src={image} alt="" />
            <h4>{name}</h4>
            <div className='flex justify-between'>
                <h5>{country}</h5>
                <button>{allrounder?'all rounder':''}</button>
            </div> 
            <div className='flex justify-between'>
                <h5>{batting_style}</h5>
                <h5>{batting_style}</h5>
            </div>
            <div className='flex justify-between'>
                <h5>Price:{hire_price}</h5>
                <button onClick={()=>handleSeclect(player)}>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;