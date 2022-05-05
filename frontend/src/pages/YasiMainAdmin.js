//main page for Admins
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMainAdmin (props){
    //define constants or functionalities in here

return(
  //Admin will be able to manage user acounts in general
  <div>
    <NavBar />
    <div>
      <h2>Welcome Admin</h2>
      <h3>For now, it will display all the users whatever</h3>
    </div>
  </div>
);

}
export default YasiMainAdmin;