//this is where staffs can check out what appointments are set for the day
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';





function YasiAppointments (props){
  //get scheduled appointment appointments
  const [appointments, setAppointment] = useState([]);
  
  useEffect(() => {
    api.get('/appointment/appointments').then((res) => setAppointment(res.data))

  }, [])

    //define constants or functionalities in here
  function del(store_name,id){
    const body = {
      "store_name":store_name,
      "id":id
    }
    api.post('/appointment/deleteAppointment',body).then((res) => {
      alert("Appointment deleted")
    }).catch(err => console.log(err))
  }
  function approve(store_name,id){
    //add in function to approve/unapprove
    const body = {
      "store_name":store_name,
       "id":id
       }
       api.post('/appointment/approve',body).then((res) => {
        alert("approved changed")
      }).catch(err => console.log(err))
      }
      

return(
  //TBD: After the navbar here, display options for a logged in user 
  <div className= "YasiAppointments">
    <NavBar />
    <table>
        <tr>
          <th>store</th>
          <th data-visible="false">id</th>
          <th>approved</th>
          <th>description</th>
          <th>donor</th>
          <th>reserved date</th>
          <th>delete</th>
          <th>approve</th>
        </tr>
        {appointments.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.store_name}</td>
              <td>{val.id}</td>
              <td>{val.approved}</td>
              <td>{val.description} </td>
              <td>{val.donor}</td>
              <td>{val.reserved_date}</td>
              <td><button onClick={del(val.store_name,val.id)}>delete </button></td>
              <td><button onClick={approve(val.store_name,val.id)}>approve </button></td>
            </tr>
          )
        })}
      </table>  

  </div>
);

}
export default YasiAppointments;