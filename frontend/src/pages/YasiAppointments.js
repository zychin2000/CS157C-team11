//this is where staffs can check out what appointments are set for the day
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';


const appointments =  
//get scheduled appointment appointments
//placeholder  
 [{store_name: "dog", id: 1, approved: "false",description:"dog",donor:"dog", reserved_date: "10/22/2022"},
{store_name: "dog", id: 2, approved: "false",description:"dog",donor:"dog", reserved_date: "10/22/2022"}]

function YasiAppointments (props){
    //define constants or functionalities in here
    function del(id){
      //Add in delete from db
    }

    function approve(id){
      //add in function to approve/unapprove
    }
      

return(
  //TBD: After the navbar here, display options for a logged in user 
  <div className= "YasiAppointments">
    <NavBar />
    <table>
        <tr>
          <th>store</th>
          <th>id</th>
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
              <button onClick={del(val.id)}>delete </button>
              <button onClick={approve(val.id)}>approve </button>
            </tr>
          )
        })}
      </table>

  </div>
);

}
export default YasiAppointments;