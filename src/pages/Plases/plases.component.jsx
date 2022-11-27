import React,{useEffect} from 'react'
import './plases.style.css'
import PlaceCard from '../../components/PlaceCard/placeCard.component'


import entoto from  '../../assets/places/entoto.jpg'
import national from  '../../assets/places/national-museum.png'
import introImage from '../../assets/places/place-intro.jpg'
import unity from '../../assets/places/unity.jpg'
import ethino from '../../assets/places/ethino.jpg'
import piassa from '../../assets/places/piassa.jpg'
import lagar from '../../assets/places/lagar.jpg'
import red from '../../assets/places/red.jpg'
import minilik from '../../assets/places/minilik.jpg'
import merkato from '../../assets/places/merkato.jpg'
import tiglachin from '../../assets/places/tiglachin.jpg'
import shiromeda from '../../assets/places/shiromeda.jpg'


const places=[
        {
            name: "National Museum of Ethiopia",
            address: "2QQ6+6P4, Addis Ababa Arada",
            phone : "0932255228",
            photo: national,
            website:null,
            descreption: "The star of the collection, which includes traditional and ceremonial costumes, paintings, sculptures and relics from the Pre-Aksumite civilization, is the partial fossilized skeleton of Lucy, a female hominin who lived some 3.2 million years ago. While the original fossils belong to the museum, what’s on display for visitors is a cast of our ancient ancestor Collection size: Hominid fossils, D'mt items, Kingdom of Aksum objects, Ethiopian Empire art"
        },

        {
            name: "Entoto Park",
            address: "2QQ6+6P4, Addis Ababa Arada",
            phone : "0932255228",
            photo: entoto,
            website:"https://www.entoto-natural-park.org/",
            descreption: "Entoto Natural Park is located on the South Eastern slopes of Mount Entoto at 2,600 meters. Even though there are still some parts under construction, the park aims to be equipped with several indoor and outdoor facilities built using local materials to preserve the beauty of this natural site. Entoto Natural Park also includes several outdoor activities such as paintball, hiking, horse riding and biking. On the other hand, Entoto Natural Park is the perfect spot for birdwatchers with some 200 bird species registered in the mixed habitats of forest wood land, rock sloop cliffs and marshes. "
        },

        {
            name: "Unity Park",
            address: "2QQ6+6P4, Addis Ababa Arada",
            phone : "0932255228",
            photo: unity,
            website:"https://unitypark.et/",
            descreption: "Unity Park is an amusement park located in Arat Kilo district of Addis Ababa, in the compound of National Palace. Established in October 2019 with total 20 hectares inside palace compound, it features zoo and historical artifacts with entrance by tickets purchased by online services such as Ethio telecom and using Commercial Bank of Ethiopia. "
        },

        {
            name: "Ethnological Museum",
            address: "2QQ6+6P4, Addis Ababa Arada",
            phone : " 011 123 1068",
            photo: ethino,
            website:null,
            descreption: "The Ethnological Museum, Addis Ababa, in Ethiopia, is a public institution dedicated to ethnology and culture. The Ethnological Museum houses anthropological, musicological and cultural objects. The Ethnological Museum is the first university museum in Ethiopia. The Museum is located in the main Campus of Addis Ababa University which houses the Institute of Ethiopian Studies "
        },

        {
            name: "Piassa Area",
            address: "2QQ6+6P4, Addis Ababa Arada",
            phone : null,
            photo: piassa,
            website:null,
            descreption: "The Piassa area is one of the oldest parts of Addis Ababa… and it shows! Some of the creaky structures here are highly evocative and other buildings show the clear influence of the Italian invasion of Ethiopia. You can also see the famous Taitu here, the first modern hotel in Ethiopia and still in use."
        },

        {
            name: "Lagar Railway Station",
            address: "2Q63+PF Addis Ababa, Ethiopia Addis Ababa",
            phone : null,
            photo: lagar,
            website:null,
            descreption: "Lagar (or Legehar) Railway station is Ethiopia's first railway connecting Ethiopia's Capital Addis Ababa with the then French Colony of Djibouti. Built by France (1917), it is unique in its architecture and being Ethiopia's first of its kind."
        },

        {
            name: "Red Terror Martyrs Memorial Museum",
            address: "Code 1000 Meskel Square, Addis Ababa, Ethiopia",
            phone : "+251 118 506 730",
            photo: red,
            website:null,
            descreption: "The Red Terror Martyrs Memorial Museum, close to Meskel Square, is a small museum depicting photos with captions about how bad the the 17 years (1974 - 1991) of the Communist Derg regime was. It is a nice museum to learn the history of Ethiopia few decades back."
        },

        {
            name: "Emperor Menelik II Statuem",
            address: "Minilik Square Addis Ababa",
            phone : null,
            photo: minilik,
            website:null,
            descreption: 'This is the statue of Emperor Menelik II - the founder of Addis Ababa and who made Ethiopia the only African Nation which was never colonized by defeating Fascist Italy. Emperor Menelik II is also known to be "The Father of Ethiopia`s Modernization"'
        },

        {
            name: "Mercato",
            address: "Addis Ababa, Ethiopia",
            phone : null,
            photo: merkato,
            website:null,
            descreption: 'Mercato is the biggest outdoor market not only in Addis Ababa or Ethiopia but in the whole of Africa. The must see parts of Merkato include the Spice Market, the hand made baskets market, and second hand items market. It is closed on Sundays'
        },
        {
            name: "Tiglachin (Derg) Monument",
            address: "Churchill Street, Addis Ababa, Ethiopia",
            phone : null,
            photo: tiglachin,
            website:null,
            descreption: 'Located at the famous street in Addis Ababa (Churchill Street), Tiglachin or Derg Monument was erected in honor of Ethiopian and Cuban soldiers who struggled and conquered the invading forces of the Somali Republic in 1977 & 1978. It is one of the historical monuments in Addis Ababa from the 17 years (1974 – 1991) Communist Rule in Ethiopia.'
        },
        
        {
            name: "Shiro Meda",
            address: "Churchill Street, Addis Ababa, Ethiopia",
            phone : null,
            photo: shiromeda,
            website:null,
            descreption: 'Shiro Meda local market located near the US Embassy in Addis Ababa is one of the best local markets to shop handwoven cotton clothes mainly for women. It is also famous for buying small gift items like Tshirts, necklaces, earrings, etc'
        },
        
        
    ]



export default function Plases(){
    useEffect(() => {
        document.title = 'Destination In Addis Ababa';
      }, []);
    return (
        <div>
            <div className='places-intro'>
                <img alt='place in unity park' src={introImage}/>
                <h1>Destination In Addis Ababa</h1>
            </div>
            <div className='place-grid-gap'>
                { places.map(place =>( 
                        <div key = {place.name}>
                            <PlaceCard name={place.name} address = {place.address} phone = {place.phone}  photo = {place.photo} descreption = {place.descreption} website = {place.website}/>
                        </div>  
                        )
                    )
                }
            </div> 
        </div>
        
    )
}
