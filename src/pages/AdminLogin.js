//login page for admin only!!
//a regular user won't be able to access that super easily

import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function adminLogin (props){
    //define constants or functionalities in here

    

    //below is basically what we will see
    return(
      //navbar
      <div>
      <table width="100%">
        <tr color="#ff9238">
          <td width="95%"><h1>YASI</h1></td>
          <td align="right"><Link to="/">Home</Link></td>
          <td align="right"><Link to="/login">Login</Link></td>
          <td align="right"><Link to="/register">Register</Link></td>
        </tr>
      </table>
    </div>
    );

}

export default adminLogin;