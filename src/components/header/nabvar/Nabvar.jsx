import React from 'react';
import navImage from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

const Nabvar = ({addCoin,coin,addMoney}) => {
    
    
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto p-4 mb-3'>
            <div>
                <img src={navImage} alt="" />
            </div>
            <div className='flex gap-5'>
                <ul className='flex justify-between gap-4 text-base text-[#131313B3] font-normal'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <button>{addCoin} Coin <FontAwesomeIcon icon={faCoins} /></button>
            </div>
        </div>
    );
};

export default Nabvar;