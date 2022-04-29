//This is the first page or the main index page user will access to when 
//they want to use YASI

//The main goal of this to have a navbar/area for users to choose the following
//actions: login, register

//As of now, decorate or add text content about what YASI is here
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';


function YasiIndex(props) {
  //define constants or functionalities in here


  return (
    <div>
      <NavBar />

      {/* Place some image here... maybe the yasi_index_pantry_pic one*/}
      <div className="imageContent">
        <h2>Food Banks</h2>
        <p>Donate now... etc</p>
        <p>Some more inspirational text or quotes here</p>
      </div>

      <div className="centerContent">
        <h2 className="centerContent">About YASI</h2>
        <p className="centerContent">YASI is an acroymn for "Yet Another Stock Inventory." This application is meant to 
          help giveaway stations such as food pantries have a much more easier time to manage
          their inventory.
        </p>
        <h3 className="centerContent">Our Goals</h3>
        <p className="centerContent">We firmly believe that everyone should get fed. In making this application,
          we hope we are able to get food to those in needs with much ease.
        </p>
      </div>



    </div>
  );

}
export default YasiIndex;