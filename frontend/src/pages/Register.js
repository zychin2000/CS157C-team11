//user is new. Allow user to select whether or not they are staff or donor
//give user a form to create an account
//refer to the doc for reference

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function register (props){
    //define constants or functionalities in here


    

    //below is basically what we will see
    return(
      //navbar
      <div>
      <table width="100%">
        <tr>
          <td width="95%"><h1>YASI</h1></td>
          <td align="right"><Link to="/">Home</Link></td>
          <td align="right"><Link to="/login">Login</Link></td>
          <td align="right"><Link to="/register">Register</Link></td>
        </tr>
      </table>
      <h2>Registration Form</h2>
      <p><i>Fill out the form to create an account</i></p>
      {/* Form for registering. Input form action later */}
      <form>
        <table>
          <tr>
            <td><label for="first_name">First Name: </label></td>
            <td><input type="text" id ="first_name"></input></td>
          </tr>
          <tr>
            <td><label for="last_name">Last Name: </label></td>
            <td><input type="text" id ="last_name"></input></td>
          </tr>
          <tr>
            <td><label for="username">Username: </label></td>
            <td><input type="text" id ="username"></input></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="text" id ="password"></input></td>
          </tr>
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="text" id ="email"></input></td>
          </tr>
          <tr>
            <td><label for="contact_info">Contact Info: </label></td>
            <td><input type="text" id ="contact_info"></input></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit"></input></td>
          </tr>
        </table>
      </form>
    </div>


    );
}

export default register;