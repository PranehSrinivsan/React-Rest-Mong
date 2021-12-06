import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cities(){
    const url=`http://localhost:5000/cities`;//get list of cities
    const [cities,setCities]= useState([]);

    useEffect(()=>{
        axios.get(url)
        .then((json)=>{
            setCities(json.data.name)
            console.log(json.data)         
        })
        .catch((err)=>{
            console.error(err.message);
        })
    },[url])

    return (
        <div>
            {cities}  
        </div>
    )
}

export default Cities;