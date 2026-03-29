import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner'
import Info from './components/Info'
import NavBar from './components/NavBar'
import ToolCards from './components/ToolCards'
import Cart from './components/cart'
import PackageCard from './components/PackageCard'
import DisplayCards from './components/DisplayCards'

const packages = async () => {
  const response = await fetch('/packages.json');
  const data = await response.json();
  return data;
}

const packagePromise = packages();

function App() {


  return (
    <>
      <NavBar />
      <Banner />
      <Info />

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        <ToolCards packagePromise={packagePromise} />
      </Suspense>


    </>
  )
}

export default App
