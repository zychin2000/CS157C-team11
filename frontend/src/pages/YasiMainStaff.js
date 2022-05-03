//the assumption with someone being able to access YasiMainStaff.js is that they are
//a staff member
//A Staff member gets to have access to inventory and use some tool

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMainStaff (props){
    //define constants or functionalities in here
  

return(
  <div>
    <NavBar />
    <div>
      <h2>Welcome Staff</h2>
    </div>
    
    <button><Link to="/yasiinventory">Access Inventory</Link></button>
    <button><Link to ="/yasiappointments">Appointments Scheduled Today</Link></button>
    
  </div>
);

}
export default YasiMainStaff;