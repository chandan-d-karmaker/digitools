import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Info from './components/Info'
import NavBar from './components/NavBar'
import ToolCards from './components/ToolCards'
import GetStarted from './components/GetStarted'

const packages = async () => {
  const response = await fetch('/packages.json');
  const data = await response.json();
  return data;
}

const packagePromise = packages();

function App() {

  const [cartItems, setCartItems] = useState([]);


  return (
    <>
      <NavBar cartItems={cartItems} />
      <Banner />
      <Info />

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <ToolCards packagePromise={packagePromise} cartItems={cartItems} setCartItems={setCartItems} />
      </Suspense>

      <GetStarted/>


    </>
  )
}

export default App
