//This is the NavBar component
import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route, Link, Navigate,
} from "react-router-dom";



//When user is logged in, the navbar should not display the login or register button
//login button becomes the logout button
//by default, user is not logged in

//check for token
const token = localStorage.getItem("user");
console.log(token);

//very simple at the moment, will need to ensure token is valid in the first place
const NavBar = () => {
    //user is logged in
    //add the option to logout
    if (token != null) {
        return (
            <div className="navbar">
                <div>
                    <table width="100%" className="navbarContent">
                        <tr color="#ff9238">
                            <td width="95%"><h1>YASI</h1></td>
                            <td align="right"><Link to="/">Home</Link></td>
                            <td align="right"><Link to="/logout">Logout</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
    else {
        //remove token
        localStorage.removeItem("user");
        //display login and register option
        return(
        <div class="navbar">
            <div>
                <table width="100%" className="navbarContent">
                    <tr color="#ff9238">
                        <td width="95%"><h1>YASI</h1></td>
                        <td align="right"><Link to="/">Home</Link></td>
                        <td align="right"><Link to="/login">Login</Link></td>
                        <td align="right"><Link to="/register">Register</Link></td>
                    </tr>
                </table>
            </div>
        </div>
        );
    }
}
export default NavBar;