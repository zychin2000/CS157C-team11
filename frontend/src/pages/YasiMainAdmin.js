//main page for Admins
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';

function YasiMainAdmin (props){
    //define constants or functionalities in here
    const allUsers = () => {
      api.get('/adminmanage/getAllUsers')
    }

    function removeUser (email){
      api.post('/adminmanage/removeUser', {email}).then(res => {console.log("removed")});
    }


return(
  <div>
    <NavBar />
    <div>
      <h2>Welcome Admin</h2>

      <h3>User Table</h3>
      <p> to be displayed here... with options to delete woo</p>
      <table>
        <tr>
          <th>userid</th>
          <th>email</th>
        </tr>

      </table>



    </div>
  </div>
);

}
export default YasiMainAdmin;