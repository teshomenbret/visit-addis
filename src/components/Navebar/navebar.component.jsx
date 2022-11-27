import React, {useState} from 'react'
import {Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import './navbar.style.css'

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
  
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
            Vist Addis
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
            <AiOutlineMenu/>
          
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
           <ul >
                <li>
                    <Link  to={"/attraction"} onClick = {() => {setIsNavExpanded(!isNavExpanded);}}>Attraction</Link>
                </li>
                <li>
                    <Link  to={"/food"} onClick = {() => {setIsNavExpanded(!isNavExpanded);}}>Food & Drink</Link>
                </li>
                <li>
                    <Link  to={"/stay"} onClick = {() => {setIsNavExpanded(!isNavExpanded);}}>Whare to stay</Link>
                </li>
                <li>
                    <Link  to={"/getting-here"} onClick = {() => {setIsNavExpanded(!isNavExpanded);}}>Getting Here</Link>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
  