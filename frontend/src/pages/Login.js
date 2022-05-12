//this will be the login page 
//or allow user to login... but recall how we have 3 types of users:
//Staff, Donors, and Admins (Admin will have its own separate login page, so not here)

//Focus on Staff and Donor here!!
//let user select which one they are

import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';

const Login = () => {

  //login will ask for username/email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('donor');

  //display status
  const [errorMsg, setErrorMsg] = useState('')

  //way to navigate
  const navigate = useNavigate();
  const toStaffMain = '/yasimainstaff'
  const toDonorMain = '/yasimaindonor'

  //TBD: Access to db and see if user exists...
  const login = (event) => {
    api.post('/auth/', {
      email,
      password,
      userType
    }).then(res => {
      if(res.data.token){
        localStorage.setItem("user", JSON.stringify(res.data))
        //navigate to specific main page
        if(userType == 'staff'){
          navigate(toStaffMain);
        }
        else{
          navigate(toDonorMain);
        }

      }
      return res.data
    }).catch(err => {
      console.log(err.response)
      setErrorMsg('Login Failed. Please try again or register for an account')
    })
    //something here to look for user
    event.preventDefault()
  }

  return (
    <div>
      <NavBar />

      <h2>Login Form</h2>
      {/* Form for logging in. Input form action later */}
      <p className="errorStatusMessage">{errorMsg}</p>
      <form onSubmit={login}>
        <table className="formTable">
        <tr>
            <td><label for="userType">User Type: </label></td>
            <td>
              <select type="text" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                <option value="donor">Donor</option>
                <option value="staff">Staff</option>
              </select>
              </td>
          </tr>
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