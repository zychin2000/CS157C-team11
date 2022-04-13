//this will be the login page 
//or allow user to login... but recall how we have 3 types of users:
//Staff, Donors, and Admins (Admin will have its own separate login page, so not here)

//Focus on Staff and Donor here!!
//let user select which one they are

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

function login (props){
    //define constants or functionalities in here

    //THIS BELOW? Unsure.
    //Goal: Connect to db and check this user

    // const onSubmit = event => {
    //   event.preventDefault();
    //   const username = this.username.value;
    //   const password = this.password.value;
    //  };
    

    //below is basically what we will see
    //login needs a form to take user's input
    return(
      //navbar
      <div>
        <NavBar/>

      <h2>Login Form</h2>
      {/* Form for logging in. Input form action later */}
      <form>
        <table>
          <tr>
            <td><label for="username">Username: </label></td>
            <td><input type="text" id ="username" /></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="text" id ="password" /></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit"/></td>
          </tr>
        </table>
      </form>


    </div>
    );

}

export default login;