import React from 'react'
import './placeCard.style.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import {ImLocation2} from "react-icons/im";


export default function PlaceCard({name, address, phone, photo, descreption, website }){

    return (
        <div className='grid-place-item'>
            <div className='photo-area-item'>
                <img alt='national museum' src={photo}/>
            </div>
            <div className='basic-area-item'>
                <h2 className='place-name'>{name}</h2>
                <p> <ImLocation2/>{'      '+address }</p>
                {phone ?<p> <BsFillTelephoneFill/>{'      '+phone}</p>:null}
                {website ?<a href={website}>see website</a>:null}
            </div>
           
            <div className='detail-area-item'>
                <p>{descreption}</p>
            </div>

        </div>  
    )
}
