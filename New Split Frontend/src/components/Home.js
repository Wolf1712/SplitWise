import React from 'react'
import CardDisp from './CardDisp'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  
  
  return (
    <div>

    <Navbar/>
        <CardDisp/>
    </div>
  )
}

export default Home