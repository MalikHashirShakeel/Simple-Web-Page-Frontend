import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
