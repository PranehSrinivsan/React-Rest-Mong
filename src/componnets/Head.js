import React from 'react';
import { useNavigate } from "react-router-dom";
function Head(){
    const navigate  = useNavigate();
    const routeChange = () =>{ 
        navigate('/AddHotel');     
    }

    return (
        <div className="addbutton">
            <right> <span>Add your hotel</span> <button className="fas fa-plus-square" onClick={routeChange} /> </right>
        </div>
    )
}

export default Head;