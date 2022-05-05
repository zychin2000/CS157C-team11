//Allow user to select whether or not they are staff or donor
//give user a form to create an account
//refer to the doc for reference

import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/Navbar';
import api from '../utils/api';


const Register = () => {

  //userType can either be Staff or Donor
  const [userType, setUserType] = useState('staff');

  //function that return the appropriate form based on user type selected
  function FormHandler() {
    if (userType === 'staff') {
      return StaffForm()
    }
    else {
      return DonorForm()
    }
  }

  //form for userType
  const UserTypeIndicatorForm = () => {
    return (
      <div>
        <table>
          <tr>
            <td><button onClick={() => setUserType('staff')}>Staff</button></td>
            <td><button onClick={() => setUserType('donor')}>Donor</button></td>
          </tr>
        </table>
      </div>
    );
  }

  //form for Staff
  const StaffForm = () => {
    return (
      <form onSubmit={addNewStaff}>
        <table className="formTable">
          <tr><h3>Staff Form</h3></tr>
          <tr><p><i>Fill out the form to create an account</i></p></tr>
          <tr>
            <td><label for="first_name">First Name: </label></td>
            <td><input type="text" name="first_name" value={user_staff.first_name} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><label for="last_name">Last Name: </label></td>
            <td><input type="text" name="last_name" value={user_staff.last_name} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><label for="username">Username: </label></td>
            <td><input type="text" name="username" value={user_staff.username} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="password" name="password" value={user_staff.password} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="email" name="email" value={user_staff.email} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><label for="contact_info">Contact Info: </label></td>
            <td><input type="text" name="contact_info" value={user_staff.contact_info} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
          <td><label for="organization">Organization: </label></td>
          <td><input type="text" name="organization" value={user_staff.organization} onChange={handleStaffChange} /></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit"></input></td>
          </tr>
        </table>
      </form>
    );
  }

  //form for Donors
  const DonorForm = () => {
    return (
      <form onSubmit={addNewDonor}>
        <table className="formTable">
          <tr><h3>Donor Form</h3></tr>
          <tr><p><i>Fill out the form to create an account</i></p></tr>
          <tr>
            <td><label for="first_name">First Name: </label></td>
            <td><input type="text" name="first_name" value={user_donor.first_name} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="last_name">Last Name: </label></td>
            <td><input type="text" name="last_name" value={user_donor.last_name} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="username">Username: </label></td>
            <td><input type="text" name="username" value={user_donor.username} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="password" name="password" value={user_donor.password} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="email" name="email" value={user_donor.email} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="contact_info">Contact Info: </label></td>
            <td><input type="text" name="contact_info" value={user_donor.contact_info} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><label for="organization">Organization: </label></td>
            <td><input type="text" name="organization" value={user_donor.organization} onChange={handleDonorChange} /></td>
          </tr>
          <tr>
            <td><br /><input type="submit" value="Submit"></input></td>
          </tr>
        </table>
      </form>
    );
  }

  //Staff user
  const [user_staff, setStaff] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    contact_info: "",
    organization: "",
  });

  //Donor user
  const [user_donor, setDonor] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    contact_info: "",
    organization: "",
  });

  //handle Staff form changes
  const handleStaffChange = (event) => {
    setStaff({
      ...user_staff,
      [event.target.name]: event.target.value,
    });
  };

  //handle Donor form changes
  const handleDonorChange = (event) => {
    setDonor({
      ...user_donor,
      [event.target.name]: event.target.value,
    });
  };

  //add new Staff user to db
  //TBD!!!
  const addNewStaff = (event) => {
    let user = {
      ...user_staff,
      accountType: 'staff'
    }
    api.post('/users/', user).then(res => {
      if(res.data.token){
        localStorage.setItem("user", JSON.stringify(res.data))
      }
      return res.data
    }).catch(err => {
      console.log(err.response)
    })
    event.preventDefault();
    console.log(event.target.value);
    //something here to add to Staffs
    
  }

  //add new Donor user to db
  //TBD!!!
  const addNewDonor = (event) => {
    let donor = {
      ...user_donor,
      accountType: 'donor'
    }
    api.post('/users/', donor).then(res => {
      if(res.data.token){
        localStorage.setItem("user", JSON.stringify(res.data))
      }
      return res.data
    }).catch(err => {
      console.log(err.response)
    })
    event.preventDefault();
    console.log(event.target.value);
    //something here to add to Donors

  }

  return (
    //navbar
    //prompt user to pick out what account they will be creating
    //return appropriate form for user to fill out
    <div>
      <NavBar />
      <h2>Registration Form</h2>
      <p><i>Select what kind of user you are:</i></p>
      <UserTypeIndicatorForm />
      <hr />
      {FormHandler()}
    </div>
  );

}


export default Register;