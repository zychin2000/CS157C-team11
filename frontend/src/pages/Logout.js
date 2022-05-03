//TO BE DONE!!
//Goal: End user's session and redirect back to home page (aka YasiIndex.js)

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function logout(props){
    localStorage.removeItem("user");
    //this is only redirecting back to home/index page
    <Link to="/"></Link>
}

export default logout;