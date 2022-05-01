import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function YasiDonorSchedule (props){
    //define constants or functionalities in here
    //perhaps, this is where we ought to divert?
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const submit = (event) => {
      event.preventDefault();
      //something here to look for user
    }
return(
  //TBD: After the navbar here, display options for a logged in user 
  <div>
    <NavBar />
    <form>
      
        <table className="donationForm">
          <tr>
            <td><label for="Donation Description">Donation Description </label></td>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows = {10} cols = {50} />
          </tr>
          <tr>
            <td><label for="date">Appointment date </label></td>
            <td><input type="text" name="appointment" value={date} onChange={(e) => setDate(e.target.value)}/></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit" /></td>
          </tr>
        </table>
      </form>

  </div>
);

}
export default YasiDonorSchedule;