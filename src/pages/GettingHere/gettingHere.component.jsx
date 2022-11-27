import React,{useEffect} from 'react'
import './gettingHere.style.css'
import airline from './../../assets/airline.jpg'

export default function Getting(){
    useEffect(() => {
        document.title = 'How to Get to Addis Ababa';
      }, []);
    return (
        <div>
            <div className='getting-intro'>
                <img alt='hotel in unity park' src={airline}/>
            </div>
        <div className='getting-grid-gap'>
            <div>
                <h1>How to Get to Addis Ababa</h1>
                <div className='pad'>
                    <h3>Plane</h3>
                    <p>Addis Ababa Bole International Airport (ADD) is one of the busiest on the continent and sees daily flights to Europe, Asia, and America, as well as African destinations. The airport is not far from the city center and is accessible from the Ring Road. Many taxis can be found on-site for around Br200 and not more than Br300. Additionally, many hotels offer free shuttle service to the airport.</p>
                    <h3>Train</h3>
                    <p>A brand-new (as of 2017) electric rail line connects Addis Ababa to Djibouti. If traveling in this direction, note that the train takes less than 12 hours, whereas driving takes three days. This train leaves from Furi-Labu station</p>
                    <h3>Car</h3>
                    <p>Ethiopia's roads are well-maintained and a safe way to explore the country. Addis Ababa connects to the rest of the country through many highways: the 1, the 5, the 51, the 4, the 3, and the 2. However, if you rent a car, you need a driver. An old compact car will cost about Br2700 for one day.</p>
                    <h3>Bus</h3>
                    <p>Addis Ababa is home to three bus terminals: Autobus Terra, Meskel Square, and ASCO. Buses connect to multiple domestic and international destinations and are a safe and affordable way to travel.</p>
                </div>
            </div>
            <div>
                <h2>How to Get Around Addis Ababa</h2>
                <div className='pad'>
                    <h3>Public Transportation</h3>
                    <p>Addis Ababa just opened a light rail transportation system that runs through much of the city and operates seven days a week. Tickets cost Br2-6 and all destinations are marked in English as well as Amharic. Minibuses are also a great way to get around, and are often very cheap. You can hail a minibus anywhere that it is safe to stop. Inside, the conductor will call out the destination, and if it is yours, get in and pay when requested. Usually, minibuses cost between Br2 and Br7.</p>
                    <h3>Taxi</h3>
                    <p>Taxis are also easy to find, and prices for an average trip range from Br80 to Br120.</p>
                    <h3>Car</h3>
                    <p>As mentioned above, it is possible to rent a car in Addis Ababa. That being said, traffic can be very hectic, and many major intersections, including Meskel Square, do not have stoplights. A car and driver can be rented for about Br600 a day.</p>
                </div>
            </div>
        </div> 
    </div>
        
    )
}