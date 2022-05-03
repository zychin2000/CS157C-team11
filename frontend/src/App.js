import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, 
  Route, Link, Navigate,} from "react-router-dom";
//pages...
import YasiIndex from './pages/YasiIndex';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import YasiMainStaff from './pages/YasiMainStaff';
import YasiMainAdmin from './pages/YasiMainAdmin';
import YasiMainDonor from './pages/YasiMainDonor';
import YasiInventory from './pages/YasiInventory';
import YasiAppointments from './pages/YasiAppointments';
import YasiItemRateCalc from './pages/YasiItemRateCalc';
import YasiDonorSchedule from './pages/YasiDonorSchedule';
import AdminLogin from './pages/AdminLogin';
import NavBar from './components/Navbar';


//Reminder to self: Remove YasiItemRateCalc
//That will be included in the inventory page

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" exact element = {<YasiIndex />}/>
          <Route path ="/login" element = {<Login />}/>
          <Route path ="/register" element = {<Register />}/>
          <Route path ="/logout" element = {<Logout />}/>
          <Route path ="/yasimainstaff" element = {<YasiMainStaff />}/>
          <Route path ="/yasiadmin" element = {<AdminLogin />}/>
          <Route path ="/yasimainadmin" element = {<YasiMainAdmin />}/>
          <Route path ="/yasimaindonor" element = {<YasiMainDonor />}/>
          <Route path ="/yasiinventory" element = {<YasiInventory />}/>
          <Route path ="/yasiappointments" element = {<YasiAppointments />}/>
          <Route path ="/yasiitemcalc" element = {<YasiItemRateCalc />}/>
          <Route path ="/yasidonorschedule" element = {<YasiDonorSchedule />}/>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
