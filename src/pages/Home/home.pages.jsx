import React,{useEffect} from 'react'
import {Link } from "react-router-dom";
import './home.style.css'
import addis from '../../assets/welcome.png'


export default function Home(){
        useEffect(() => {
          document.title = 'Addis Abeba, Ethiopia';
        }, []);
      
    return (
        <div className='home-container'>
            <div className='home-intro'>
                <img className='window' alt='home page view' src={addis}/>
            </div>
            
            <div className='intro-text'>
                <h1>Addis Abeba, Ethiopia</h1>
                <p>Addis Ababa, Ethiopia’s sprawling capital in the highlands bordering the Great Rift Valley, is the country’s commercial and cultural hub. Its National Museum exhibits Ethiopian art, traditional crafts and prehistoric fossils, including replicas of the famous early hominid, "Lucy." The burial place of the 20th-century emperor Haile Selassie, copper-domed Holy Trinity Cathedral, is a neo-baroque architectural landmark.</p> 
            </div>
            <div className='box-nav'>
                    
                        <Link  to={"/attraction"}><div>Attraction </div></Link>
                   
                        <Link  to={"/food"}><div>Food & Drink</div></Link>
                   
                        <Link  to={"/stay"}><div>Whare to stay</div></Link>
                   
                        <Link  to={"/getting-here"}><div>Getting Here</div></Link>
                   

                </div>
        </div>
        
    )
}


