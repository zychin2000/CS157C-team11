//This is the first page or the main index page user will access to when 
//they want to use YASI

//The main goal of this to have a navbar/area for users to choose the following
//action: login, register
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function YasiIndex (props){
    //define constants or functionalities in here
  

return(
  //navbar. Will eventually be refactored later on
  <div>
    <table width="100%">
      <tr>
        <td width="95%"><h1>YASI</h1></td>
        <td align="right"><Link to="/">Home</Link></td>
        <td align="right"><Link to="/login">Login</Link></td>
        <td align="right"><Link to="/register">Register</Link></td>
      </tr>
    </table>
  </div>
);

}
export default YasiIndex;