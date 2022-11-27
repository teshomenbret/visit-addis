import React , { useState } from 'react'
import './RestaurantCard.style.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import {ImLocation2} from "react-icons/im";


export default function RestaurantCard({name, address, description, photo, phone, website}){
    return (
        <div className='grid-restaurant-item'>
            <div className='photo-area-restaurant-item'>
                <img alt='national museum' src={photo}/>
            </div>
            <div className='info-area-restaurant-item'>
                <h2 className='restaurant-name'>{name}</h2>
                <p> <ImLocation2/>{' '+address }</p>
                {phone ?<p> <BsFillTelephoneFill/>{'      '+phone}</p>:null}
                {website ?<a href={website}>See Website</a>:null}
            </div>
           
            <div className='detail-area-restaurant-item'>
                <p>{description}</p>       
            </div>
        </div>  
    )
}
