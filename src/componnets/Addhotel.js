import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles/form.css';
function Addhotel(){
    const navigate  = useNavigate();
    const [hotelname,sethotelname]=useState();
    const [imageurl,setImageurl]=useState();
    const[location,setLocation]=useState();
    const[locationurl,setLocationurl]=useState();
    const[city,setCity]=useState();
    function createhotel(){
        const purl=`http://localhost:5000/cities/create/${city}/${hotelname}/${imageurl}/${locationurl}`
        axios.patch(purl)
        .then(()=>navigate('/'))
        .catch((err)=>{
            console.error(err.message);
        })
        console.log(hotelname,imageurl,location,locationurl,city);
        
    }

    return(
        <div className="center" >
        <form onSubmit={()=>createhotel()}>
            <div className="inputbox">
            <input 
                type="text" 
                value={hotelname}
                onChange={(e)=>sethotelname(e.target.value)}
                required
            />
            <span>Hotel Name</span>
            </div>
            <div className="inputbox">
            <input 
                type='url'
                value={imageurl}
                onChange={(e)=>setImageurl(e.target.value)}
                required
            />
            <span>Add Image url</span>
            </div>
            <div className="inputbox">
            <input 
                type='text' 
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                required
            />
            <span>Location</span>
            </div>
            <div className="inputbox">
            <input 
                type='url' 
                value={locationurl}
                onChange={(e)=>setLocationurl(e.target.value)}
                required
            />
            <span>Location url </span>
            </div>
            <div className="inputbox">
            <input 
                type='text'
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                required
            />
            <span>City</span>
            </div>
            <div className="inputbox">
            <label> Click to Add</label>
            <button type='submit' className="fas fa-plus-square"></button>
            </div>
        </form>
        </div>
    )
}

export default Addhotel