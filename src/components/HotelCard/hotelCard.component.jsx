import React from 'react'
import './hotelCard.style.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import {ImLocation2} from "react-icons/im";



export default function HotelCard({name, address, phone, photo, website}){
    return (
        <div className='grid-hotel-item'>
            <div className='photo-area-hotel-item'>
                <img alt='national museum' src={photo}/>
            </div>
            <div className='info-area-hotel-item'>
                <h2 className='hotel-name'>{name}</h2>
                <p> <ImLocation2/>{' '+address }</p>
                {phone ?<p> <BsFillTelephoneFill/>{'      '+phone}</p>:null}
            </div>
           
            <div className='detail-area-hotel-item'>
                <a href={website} target="_blank" >Explore</a>
            </div>

        </div>  
    )
}
