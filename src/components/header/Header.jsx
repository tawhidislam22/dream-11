import React, { useState } from 'react';
import Nabvar from './nabvar/Nabvar';
import Banner from './banner/Banner';

const Header = ({handleAddCoin,addCoin})=> {
    
    
    return (
        <div>
            <Nabvar addCoin={addCoin}  ></Nabvar>
            <Banner handleAddCoin={handleAddCoin}></Banner>
        </div>
    );
};

export default Header;