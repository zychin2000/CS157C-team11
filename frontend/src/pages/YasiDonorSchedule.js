import { React, useEffect, useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';
import TextField from '@mui/material/TextField';

function YasiDonorSchedule (props){
    //define constants or functionalities in here
    //perhaps, this is where we ought to divert?
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [store, setStore] = useState('');
    const [donor,setDonor] = useState('');

    //to navigate
    const navigate = useNavigate();
    const toYasiMainDonor = '/yasimaindonor'

    //display status
    const [errorMsg, setErrorMsg] = useState('')

    const submit = (event) => {
      event.preventDefault();
      //insert into schedule_donation
      const body ={
        "store_name": store,
        "id": new Date().getUTCMilliseconds(),
        "approved":false,
        "reserved_date":date,
        "description":description,
      }
      console.log(body)

      api.post('/appointment/addAppointment',body).then((res) => {
        alert("appointment added")
        //go back to main
        // navigate(toYasiMainDonor)
      }).catch(err => 
        console.log(err),
        setErrorMsg('Could not add Appointment. Please try again'))
      //something here to look for user
    }
return(

  <div>
    <button><Link to="/yasimaindonor">Return to Main</Link></button>
    <NavBar />
    <form>
      <p className="errorStatusMessage">{errorMsg}</p>
        <table className="donationForm">
          <tr>
            <td><label for="description">Donation Description </label></td>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows = {10} cols = {50} />
          </tr>
          <tr>
            <td><label for="reserved_date">Appointment date </label></td>
            <TextField 
            autoFocus
            margin="dense"
            id="expiry"
            type="date"
            fullWidth
            variant="standard"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
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