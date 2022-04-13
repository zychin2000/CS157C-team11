//user is new. Allow user to select whether or not they are staff or donor
//give user a form to create an account
//refer to the doc for reference

import { React, useEffect, useState } from 'react';
import { Link, renderMatches, ReactDOM } from "react-router-dom";
import render from 'react-dom';
import NavBar from '../components/Navbar';

const Register = (props) => {
  //define constants or functionalities in here
  const [userType, setUserType] = useState('staff');
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value)
  }
  const handleUserFormType = (event) => {
    if (userType === 'staff') {
      //display the form for staff
      return (
        <form>
          <table>
            <tr>
              <td><label for="first_name">First Name: </label></td>
              <td><input type="text" id="first_name"></input></td>
            </tr>
            <tr>
              <td><label for="last_name">Last Name: </label></td>
              <td><input type="text" id="last_name"></input></td>
            </tr>
            <tr>
              <td><label for="username">Username: </label></td>
              <td><input type="text" id="username"></input></td>
            </tr>
            <tr>
              <td><label for="password">Password: </label></td>
              <td><input type="text" id="password"></input></td>
            </tr>
            <tr>
              <td><label for="email">Email: </label></td>
              <td><input type="text" id="email"></input></td>
            </tr>
            <tr>
              <td><label for="contact_info">Contact Info: </label></td>
              <td><input type="text" id="contact_info"></input></td>
            </tr>
            <tr>
              <td><br /><input type="submit" value="Submit"></input></td>
            </tr>
          </table>
        </form>
      );
    }
    else {
      //display the form for donors
      <form>
        <table>
          <tr>
            <td><label for="first_name">First Name: </label></td>
            <td><input type="text" id="first_name"></input></td>
          </tr>
          <tr>
            <td><label for="last_name">Last Name: </label></td>
            <td><input type="text" id="last_name"></input></td>
          </tr>
          <tr>
            <td><label for="username">Username: </label></td>
            <td><input type="text" id="username"></input></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="text" id="password"></input></td>
          </tr>
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="text" id="email"></input></td>
          </tr>
          <tr>
            <td><label for="contact_info">Contact Info: </label></td>
            <td><input type="text" id="contact_info"></input></td>
          </tr>
          <tr>
            <td><label for="organization">Organization: </label></td>
            <td><input type="text" id="organization"></input></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit"></input></td>
          </tr>
        </table>
      </form>
    }
  }

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    contact_info: "",
  });


  return (
    //navbar
    <div>
      <NavBar />
      <h2>Registration Form</h2>
      <p><i>Fill out the form to create an account</i></p>
      {/* Form for registering. First, we must ask what kind of user they are planning to be:
      aka either Staff or Donor */}
      <form onSubmit={handleUserFormType}>
        <p>Are you a Staff member or Donor?</p>
        <input
          type="radio"
          name="staff_user"
          value="staff"
          checked={userType === 'staff'}
          onChange={handleUserTypeChange} />
        <label for="staff">Staff Member</label><br />
        <input
          type="radio"
          name="donor_user"
          value="donor"
          checked={userType === 'donor'}
          onChange={handleUserTypeChange} />
        <label for="donor">Donor</label><br /><br />
        <button onSubmit={handleUserFormType}>Submit</button>
      </form>
    </div>
  );
  

}

export default Register;