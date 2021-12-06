import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cities(){
    const url=`http://localhost:5000/cities`;//get list of cities
    const [cities,setCities]= useState([]);

    useEffect(()=>{
        axios.get(url)
        .then((json)=>{
            setCities(json.data)
            console.log(json.data)         
        })
        .catch((err)=>{
            console.error(err.message);
        })
    },[url])

    function getHotels(city){
       cities.find(()=>console.log('!'))
    }

    return (
        <>
        <div className="citiesSelect">
            <span>Select Yor City : </span>
            <select id="selectCity" onChange={(event)=>getHotels(event.target.value)}>
                <option hidden>I am in...</option>
                <option value="Coimbatore" >Coimbatore</option>
                <option value="Chenai">Chenai</option>
                <option value="Madhurai">Madhurai</option>
            </select> 
        </div>
        <div>

        </div>
        </>
    )
}

export default Cities;