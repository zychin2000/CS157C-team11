//main page for Admins
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import api from '../utils/api';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useRadioGroup } from '@mui/material';

function YasiMainAdmin (props){
    //define constants or functionalities in here
    const [users, setUsers] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
      api.get('/adminmanage/getAllUsers').then((res) => 
      setUsers(res.data))
    }, [])

    function removeUser (email){
      api.post('/adminmanage/removeUser', {email}).then(res => {console.log("removed")});
    }

    const columns = [
  { field: 'userid', 
    headerName: 'User ID', 
    width: 300
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 400,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return <Button>Delete</Button>
    }
  },
];

const rows = [
  //placeholders
  { id: 1, email: 'Snow@gmail.com' },
  { id: 2, email: 'Lannister@gmail.com'},
  { id: 3, email: 'Lannister@gmail.com'},
  { id: 4, email: 'Stark@gmail.com'},
  { id: 5, email: 'Targaryen@gmail.com'},
  { id: 6, email: 'Melisandre@gmail.com'},
  { id: 7, email: 'Clifford@gmail.com' },
  { id: 8, email: 'Frances@gmail.com'},
  { id: 9, email: 'Roxie@gmail.com'},
  
];


return(
  <div>
    <NavBar />
    <div>
      <h2>Welcome Admin</h2>

      <h3>User Table</h3>
      {/*
      <table className="userTable">
        <tr>
          <th>User's ID</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {users.map((val, key) => {
          return (
            <tr key={key}>
            <td>{val.id}</td>
            <td>{val.email}</td>
            <td><button onClick={removeUser(val.email)}>Delete</button></td>
          </tr>
          )
        })}


      </table>
      */}
      <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>

    </div>
  </div>
);

}
export default YasiMainAdmin;