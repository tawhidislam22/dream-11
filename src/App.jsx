import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Newsletter from './components/newletter/Newsletter'
import Utlitiles from './components/utlitiles/Utlitiles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [addCoin,setAddCoin]=useState(0);
    const handleAddCoin=()=>{
      
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
      <div >
      <div><Newsletter></Newsletter></div>
      
      </div>
      <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
