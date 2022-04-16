//This is the NavBar component
//TBD: Login/Logout toggle when a user logs in and out
import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route, Link, Navigate,
} from "react-router-dom";


const NavBar = () => {
    return (
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
export default NavBar;