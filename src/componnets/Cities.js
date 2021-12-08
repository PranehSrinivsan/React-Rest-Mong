import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cities(){

    const url=`http://localhost:5000/cities`;//get list of cities
    const [cities,setCities]= useState([]);
    const [selectcity,setSelectcity]= useState();
    const [hotellist,setHotellist]= useState([]);

    useEffect(()=>{
        axios.get(url)
        .then((json)=>{
            setCities(json.data)        
        })
        .catch((err)=>{
            console.error(err.message);
        })
        axios.get(`http://localhost:5000/cities/61b05b45d39e3802570702ee`)
        .then((json)=> console.log(json.data.hotels[0]))
    },[url])

    async function getHotels(id){
        const hurl=`http://localhost:5000/cities/hotels/${id}`;
        console.log(hurl)
        await axios.get(hurl)
        .then((json)=>{
            setHotellist(json.data)
            json.data.map((hote)=>console.log(hote))   
        })
        .catch((err)=>{
            console.error(err.message);
        })
    }

    return (
        <>
        <div className="citiesSelect">
            <span>Select Yor City : </span>
            <select value={selectcity} 
            onChange={
                (event)=>{
                    setSelectcity(event.target.value)
                    getHotels(event.target.value)
                }}>
                <option>I am in... </option>
                {cities.map((ci)=><option value={ci._id}>{ci.name}</option>)}
            </select> 
        </div>
        <div>
            {hotellist.map((hotel)=>
            <div className='hotelcontainer'>
                <div className='hotelhead'>
                    <label>{hotel.name}</label>
                <a href={hotel.location_url}><button className="fas fa-map-marker-alt"/></a>
                </div>
                <img src={hotel.hotelimageurl}/>
            </div>
            )}
        </div>
        </>
    )
}

export default Cities;