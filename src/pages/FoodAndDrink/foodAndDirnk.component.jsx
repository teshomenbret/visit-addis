import React,{useEffect} from 'react'
import './foodAndDirnk.style.css'
import tomoka from  '../../assets/restaurants/tomoka.jpg'
import hiber from  '../../assets/restaurants/hiber.jpg'
import makush from '../../assets/restaurants/makush.jpg'
import yod from '../../assets/restaurants/yod.jpg'
import vamos from '../../assets/restaurants/vamos.jpg'
import lucy from '../../assets/restaurants/lucy.jpg'
import huletsh from '../../assets/restaurants/huletsh.jpg'
import intro from '../../assets/hotel/intro.PNG'

import RestaurantCard from '../../components/RestaurantCard/RestaurantCard.component'


const restaurants=[
        {
            photo: huletsh,
            phone : "+251912838383",
            name: "Habesha 2000 Cultural Restaurant",
            address: "Habesha 2000 Cultural Restaurant Bole Tele,Addis Ababa",
            website:"www.2000habesha.com/",
            description : "2000 Habesha Cultural Ethiopian Restaurant, located around Atlas Hotel in Bole neighborhood, is a perfect place to have a variety of traditional Ethiopian meal served by order or choose from the wide choice of Buffet",
            
        },
        {
            photo: hiber,
            phone : "011 662 0922",
            name: "Hebir Ethiopia Cultural Restaurant",
            address: "Bole RoadAddis Ababa",
            website:null,
            description : "Hebir Ethiopia Cultural Restaurant, located on the Bole Road around the Addis Ababa Airport, is a great place to taste varieties of deliciously hot Ethiopian meals which is eaten with your fingers and sharing the meals from the same plate.",
            
        },
        {
            photo: makush,
            phone : "0927471711",
            name: "Makush Art Gallery",
            address: "Mega centre (Bole road),Addis Ababa",
            website:null,
            description : "Makush Art Gallery is one of the best Italian restaurant in Addis Ababa. I think the name 'Makush Italian Restaurant' would explain it more clearly. It is spacious, decorated with beautiful paintings in every corner, and above all they serve you with delicious Italian dish, among many meals on their menu. If you look for a place to eat Italian and",
            
        },
        {
            photo: yod,
            phone : " 011 661 2985",
            name: "Yod Abyssinia",
            address: "XQRV+C9X, Addis Ababa",
            website:null,
            description : "Yod Abyssinia Cultural Ethiopian Restaurant which is found in the Old Airport area is a great choice to enjoy a nightlife like Ethiopians. Every night there is a LIVE dance show of the different tribal people of Ethiopia. Seeing and trying is so fun.",
            
        },
        {
            photo: vamos,
            phone : "+251931152544",
            name: "Vamdas Entertainment",
            address: "Bole Subcity Woreda 04 #001,Addis Ababa",
            website:"addis.vamdas.com/",
            description : "The first true entertainment venue built from the ground up to provide visitors with unique entertainment experience that includes five international standard movie theaters, restaurant, night club, lounge and coffee shop.",
            
        },
        {
            photo: lucy,
            phone : " 091 194 7115",
            name: "Lucy Gazebo & Restaurant",
            address: "King George VI St, Addis Ababa",
            website:null,
            description : "Lucy Gazebo & Restaurant in Addis Ababa, next to the National Museum of Ethiopia, is a great place to have lunch as they serve tasty European/Western and Ethiopian meals. It is a good place to dine as the setting is very attractive with the small garden.",
            
        },
        {
            photo: tomoka,
            phone : "091 172 3482",
            name: "Tomoca Coffee",
            address: "Wawel St, Addis Ababa",
            website:null,
            description : "Since 1953 Tomoka is the place to be.  A taste of  the Ethiopian coffee. For a moment you can become an Ethiopian. Share the table with the unbelievable friendly local people and drink a macchiato or a black coffee. Once tasted you will return for the rest of your life.",
            
        },
  
    ]



export default function Restaurants(){
    useEffect(() => {
        document.title = 'Restaurant In Addis Ababa';
      }, []);
    
    return (
        <div>
            <div className='restaurants-intro'>
                <img alt='restaurant in unity park' src={intro}/>
                <h1>Restaurant In Addis Ababa</h1>
            </div>
            <div className='restaurant-grid-gap'>
                { restaurants.map(restaurant =>( 
                        <div key = {restaurant.name}>
                            <RestaurantCard  name={restaurant.name} address = {restaurant.address} description = {restaurant.description}  photo = {restaurant.photo}  phone = {restaurant.phone} website = {restaurant.website}/>
                        </div>  
                        )
                    )
                }
            </div> 
        </div>
        
    )
}
