//main page for Admins
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';

function YasiMainAdmin (props){
    //define constants or functionalities in here
    const allUsers = () => {
      api.get('/')
    }

return(
  <div>
    <NavBar />
    <div>
      <h2>Welcome Admin</h2>

      <h3>User Tables</h3>



    </div>
  </div>
);

}
export default YasiMainAdmin;