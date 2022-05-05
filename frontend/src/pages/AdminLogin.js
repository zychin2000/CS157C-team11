// A login page strictly for Admins

import { React, useEffect, useState } from 'react';
import { Link, Redirect, useNavigate } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';

const AdminLogin = () => {
  //login will ask for username/email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //way to navigate if token created
  const navigate = useNavigate();
  const toAdminMain = '/yasimainadmin'

  //TBD: Access to db and see if user exists...
  const login = (event) => {
    api.post('/authadmin/', {
      email,
      password
    }).then(res => {
      if(res.data.token){
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate(toAdminMain);
      }
      return res.data
      
    }).catch(err => {
      console.log(err.response)
    })
    event.preventDefault();
    //something here to look for user
  }

  return (
    <div>
      <NavBar />

      <h2>Admin Login Form</h2>
      {/* Form for logging in. Input form action later */}
      <form onSubmit={login}>
        <table className="formTable">
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="text" name="username" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
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

export default AdminLogin;