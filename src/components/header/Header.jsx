import React, { useState } from 'react';
import Nabvar from './nabvar/Nabvar';
import Banner from './banner/Banner';

const Header = coin => {
    const [addCoin,setAddCoin]=useState(0);
    const handleAddCoin=()=>{
        const newCoin=addCoin+600000;
        setAddCoin(newCoin);
    }
    return (
        <div>
            <Nabvar addCoin={addCoin} ></Nabvar>
            <Banner handleAddCoin={handleAddCoin}></Banner>
        </div>
    );
};

export default Header;