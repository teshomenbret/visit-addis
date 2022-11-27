import React from 'react'
import { Outlet} from "react-router-dom";
import Navbar from './components/Navebar/navebar.component';
import './grid.style.css'
import Footer from './components/Footer/footer.component'

const Grid = () => {
  return (
    <div className='grid'>
        <Navbar/>

        <div className ="content">
                <Outlet />
         </div>
         
        <Footer/>     
    </div>
  )
}

export default Grid 