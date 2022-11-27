import React,{useEffect} from 'react'
import './hotels.style.css'
import HotelCard from '../../components/HotelCard/hotelCard.component'
import capital from  '../../assets/hotel/capital.webp'
import friendship from  '../../assets/hotel/friendship.webp'
import golden from '../../assets/hotel/golden.webp'
import hilton from '../../assets/hotel/hilton.webp'
import lobela from '../../assets/hotel/lobela.webp'
import mirackle from '../../assets/hotel/mirackle.webp'
import skylight from '../../assets/hotel/skylight.webp'
import intro from '../../assets/hotel/intro.PNG'


const hotels=[
        {
            photo: skylight,
            name: "Ethiopian Skylight Hotel",
            address: "Bole, Addis Ababa",
            phone : "011 681 8181",
            website:"https://www.ethiopianskylighthotel.com/",
            
        },
        {
            photo: friendship,
            name: "Friendship International Hotel",
            address: "Bole, Addis Ababa",
            phone : "011 667 0202",
            website:"https://www.friendshiphotel.com.et/",
            
        },
        {
            photo: golden,
            name: "Golden Tulip Addis Ababa Hotel",
            address: " Cameroon St, Addis Ababa 5623",
            phone : "011 617 0740",
            website:"https://addis-ababa.goldentulip.com/",
            
        },
        {
            photo: hilton,
            name: "Hilton Addis Ababa",
            address: " Menelik II Ave, Addis Ababa",
            phone : "011 517 0000",
            website:"https://www.hilton.com/en/hotels/addhitw-hilton-addis-ababa/?SEO_id=GMB-EMEA-TW-ADDHITW",
            
        },
        {
            photo: lobela,
            name: "Hotel Lobelia",
            address: "Cameroon St, Bole Sub-City, Kebele 03/05, Addis Ababa",
            phone : "092 992 2939",
            website:"https://www.hotellobeliaaddis.com/",
            
        },
        {
            photo: mirackle,
            name: "Miracle Hotel",
            address: "Gabon St, Addis Ababa",
            phone : " 090 256 9469",
            website:"https://miracleaddis.com/",
            
        },
        {
            photo: capital,
            name: "Capital Hotel and Spa",
            address: "ET 1878, 22 Haile Gebre Silase St, Addis Ababa",
            phone : "+251 116 672 100",
            website:"https://capitalhotelandspa.com/",
            
        },

        
        
        
    ]



export default function Hotels(){
    useEffect(() => {
        document.title = 'Hotels In Addis Ababa';
      }, []);
    
    return (
        <div>
            <div className='hotels-intro'>
                <img alt='hotel in unity park' src={intro}/>
                <h1>Hotels In Addis Ababa</h1>
            </div>
            <div className='hotel-grid-gap'>
                { hotels.map(hotel =>( 
                        <div key = {hotel.name}>
                            <HotelCard  name={hotel.name} address = {hotel.address} phone = {hotel.phone}  photo = {hotel.photo} website = {hotel.website} />
                        </div>  
                        )
                    )
                }
            </div> 
        </div>
        
    )
}
