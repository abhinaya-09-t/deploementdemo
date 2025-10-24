import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/function components/NavBar'
import Banner from './components/function components/Banner'
import NewProducts from './components/function components/NewProducts'
import Info from './components/class components/Info'
import Footer from './components/class components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <NewProducts/>
    <Info/>
    <Footer/>
    </>
  )
}

export default App
