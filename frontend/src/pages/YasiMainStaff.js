//the assumption with someone being able to access YasiMainStaff.js is that they are
//a staff memeber
//A Staff member gets to have access to inventory and use some tool


import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMainStaff (props){
    //define constants or functionalities in here
  

return(
  //TBD: After the navbar here, display options (aka logout) for a logged in user 
  <div>
    <NavBar />
    
    <div>
      <h2>Welcome Staff</h2>
      <h3>Select among the three options:</h3>
    </div>

    <button><Link to="/yasiinventory">Access Inventory</Link></button>
    <button><Link to ="/yasiappointments">Appointments Schedule Today</Link></button>
    <button><Link to="/yasiitemratecalc">Item Rate Calculator</Link></button>
    
  </div>
);

}
export default YasiMainStaff;