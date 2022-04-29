//main page for donors
//for donors, they will be able to schedule an appointment
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiMainDonor (props){
    //define constants or functionalities in here
    //perhaps, this is where we ought to divert?

return(
  //TBD: After the navbar here, display options for a logged in user 
  // basically be able to show login/logout button toggle
  <div>
    <NavBar />
    <div>
      <h2>Welcome Donor</h2>
      <h3>Select among the options:</h3>
    </div>

    <button><Link to="/yasidonorschedule">Schedule an Appointment</Link></button>
    

  </div>
);

}
export default YasiMainDonor;