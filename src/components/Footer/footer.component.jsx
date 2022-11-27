import React from 'react';
import {Link } from "react-router-dom";
import './footer.style.css';


const Footer = () => {
    return(
        <div className='footer'>
            <div className='proud'>
                <a href="/" className="brand">
                    Vist Addis
                </a>
                <p>proudily devloped by</p>
                <p>Teshome Nbret</p>

            </div>

            <div className='footer-navigation'>
                    <Link  to={"/attraction"}><div>Attraction </div></Link>
                   
                   <Link  to={"/food"}><div>Food & Drink</div></Link>
              
                   <Link  to={"/stay"}><div>whare to stay</div></Link>
              
                   <Link  to={"/getting-here"}><div>Getting Here</div></Link>
              
            </div>
            <div className='social-navigation'>
                <a>facebook</a>
                <a>telgram</a>
                <a>instagram</a>
                <a>mail us</a>
                
            </div>
            
        </div>
    )
}
export default Footer