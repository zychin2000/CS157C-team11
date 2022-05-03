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

      {/* Image has been added, but may want to edit the photo to display YASI-specific look */}
      <div>
        <br></br>
        <img className="fitImageToPage" src={require('../images/backgrounds/yasi_index_pantry_pic4.jpg')} />
      </div>


      <div className="centerContent">
        <h2 className="centerContent">About YASI</h2>
        <p className="centerContent">YASI is an acroymn for "Yet Another Stock Inventory." This application is meant to
        help giveaway stations such as food pantries have a much more easier time to manage
        their inventory.
        </p>
        <br /><br />
        <h2 className="centerContent">Our Goal</h2>
        <p className="centerContent">The goal is to create a stock inventory application for giveaway stations, for example, 
        food pantries, charitable foundations. For this project, we will mainly be focusing on creating a service which can 
        aggregate inventories from food pantries around the world.
        <br/><br/>
        When managing a pantry, there needs to be some care when dealing with perishable items. Food can expire and have to 
        be thrown away. Some food items require special care for storing, such as being in a refrigerator or a freezer. 
        Knowing the locations and the quantity of the items stored is also very important to be able to efficiently refill 
        items at the customer facing site. If all the items can be refilled quickly and sufficiently, the customers will be 
        able to enjoy a diversity of foods in the station.
        <br/><br/>
        Items given away in the pantry are free of charge, which means that there is a lack of supply and demand forces which 
        can control the number of items which get taken. Thus, there needs to be a way to calculate the speed of items being 
        given away, as well as being able to notify the staff to take more items from the warehouse/storeroom.

        <br /><br />
          We firmly believe that everyone should get fed. In making this application,
          we hope we are able to get food to those in needs with much ease.

        </p>
      </div>



    </div>
  );

}
export default YasiIndex;