//the assumption with someone being able to access YasiMain.js is that they are
//a registered user (for now, it's Staff)
//A Staff member gets to have access to inventory and use some tool
//please refer back to document 


import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function YasiMain (props){
    //define constants or functionalities in here
  

return(

  //navbar. Will eventually be refactored later on
  //TBD: After the navbar here, display options for a logged in user 
  <div>
    <table width="100%">
      <tr>
        <td width="95%"><h1>YASI</h1></td>
        <td align="right"><Link to="/">Home</Link></td>
        <td align="right"><Link to="/logout">Logout</Link></td>
      </tr>
    </table>


  </div>
);

}
export default YasiMain;