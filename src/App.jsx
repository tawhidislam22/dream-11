import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Newsletter from './components/newletter/Newsletter'
import Utlitiles from './components/utlitiles/Utlitiles'
import {  toast } from 'react-toastify';


function App() {
  const [addCoin,setAddCoin]=useState(0);
  
    const handleAddCoin=()=>{
      toast.success("This is a success message", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
        const newCoin=addCoin+600000;
        
        setAddCoin(newCoin);
        
        
    }
    
  const  playerPrice=price=>{
    const newCoin=addCoin-price;
    setAddCoin(newCoin);
        
  }
 
  const removePlayerPrice=money=>{
    const newCoin=addCoin+money;
    setAddCoin(newCoin);
  }
  
  
  return (
    <>
      <div >
      
        
      <Header   handleAddCoin={handleAddCoin} addCoin={addCoin}></Header>
      <Utlitiles playerPrice={playerPrice} removePlayerPrice={removePlayerPrice} addCoin={addCoin}></Utlitiles>
      <div className='relative mt-80 '>
      <Newsletter></Newsletter>
      
    
      <Footer></Footer>
      </div>
      </div>
    </>
  )
}

export default App
