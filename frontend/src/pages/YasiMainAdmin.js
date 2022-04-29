//main page for Admins
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMainAdmin (props){
    //define constants or functionalities in here
    //perhaps, this is where we ought to divert?

return(
  //TBD: After the navbar here, display options for a logged in user 
  //Admin will be able to manage user acounts in general
  <div>
    <NavBar />
    <div>
      <h2>Welcome Admin</h2>
      <h3>Select among the options:</h3>
    </div>
    <h3>TBD: Options to manage user accounts in general (Read/Delete)</h3>
  </div>
);

}
export default YasiMainAdmin;