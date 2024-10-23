

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Course from './components/Course'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>

      <Routes>
      <Route path="/" element={<Login />} />
      
       <Route path='/home' element={<Home/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        

      </Routes>

    </>
  )
}

export default App