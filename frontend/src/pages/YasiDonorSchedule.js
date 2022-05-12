import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';

function YasiDonorSchedule (props){
    //define constants or functionalities in here
    //perhaps, this is where we ought to divert?
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [store, setStore] = useState('');
    const [donor,setDonor] = useState('');


    const submit = (event) => {
      //insert into schedule_donation

      const body ={
        "store_name": store,
        "id": new Date().getUTCMilliseconds(),
        "approved":false,
        "reserved_date":date,
        "description":description,
        "donor":donor,
        "reserved_date":date
      }
      console.log(body)

      api.post('/appointment/addAppointment',body).then((res) => {
        alert("appointment added")
      }).catch(err => console.log(err))
      //something here to look for user
    }
return(
  //TBD: After the navbar here, display options for a logged in user 
  <div>
    <NavBar />
    <form>
      
        <table className="donationForm">
        <tr>
            <td><label for="donor">Donor email</label></td>
            <td><input type="text" name="donor" value={donor} onChange={(e) => setDonor(e.target.value)}/></td>
          </tr>
          <tr>
            <td><label for="description">Donation Description </label></td>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows = {10} cols = {50} />
          </tr>
          <tr>
            <td><label for="reserved_date">Appointment date </label></td>
            <td><input type="date" name="reserved_date" value={date} onChange={(e) => setDate(e.target.value)}/></td>
          </tr>
          <tr>
            <td><label for="store">Store Name</label></td>
            <td><input type="text" name="store" value={store} onChange={(e) => setStore(e.target.value)}/></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit" onClick= {submit} /></td>
          </tr>
        </table>
      </form>

  </div>
);

}
export default YasiDonorSchedule;