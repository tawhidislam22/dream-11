import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Newsletter from './components/newletter/Newsletter'
import Utlitiles from './components/utlitiles/Utlitiles'

function App() {
  let coin=0;
  const playerPrice=price=>{
        coin=price;
        
  }
console.log(coin)
  return (
    <>
      
      <Header coin={coin}></Header>
      <Utlitiles playerPrice={playerPrice}></Utlitiles>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
