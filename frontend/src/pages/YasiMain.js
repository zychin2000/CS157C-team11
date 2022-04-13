//the assumption with someone being able to access YasiMain.js is that they are
//a registered user (for now, it's Staff)
//A Staff member gets to have access to inventory and use some tool
//please refer back to document 


import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMain (props){
    //define constants or functionalities in here
  

return(
  //TBD: After the navbar here, display options for a logged in user 
  <div>
    <NavBar />


  </div>
);

}
export default YasiMain;