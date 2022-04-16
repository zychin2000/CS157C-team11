//this will be the login page 
//or allow user to login... but recall how we have 3 types of users:
//Staff, Donors, and Admins (Admin will have its own separate login page, so not here)

//Focus on Staff and Donor here!!
//let user select which one they are

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

const Login = () => {

  //login will ask for username/email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //TBD: Access to db and see if user exists...
  const login = (event) => {
    event.preventDefault();
    //something here to look for user
  }

  return (
    <div>
      <NavBar />

      <h2>Login Form</h2>
      {/* Form for logging in. Input form action later */}
      <form>
        <table className="formTable">
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit" /></td>
          </tr>
        </table>
      </form>


    </div>
  );

}

export default Login;