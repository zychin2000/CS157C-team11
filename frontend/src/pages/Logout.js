//TO BE DONE!!
//Goal: End user's session and redirect back to home page (aka YasiIndex.js)

import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Logout = () => {
    localStorage.removeItem("user");
    //this is only redirecting back to home/index page
    const navigate = useNavigate()

    
    useEffect (() => {
        if(localStorage.getItem("user") == null){
            navigate("/")
        }
    });
}




export default Logout;