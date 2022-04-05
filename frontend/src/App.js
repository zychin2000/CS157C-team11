import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, 
  Route, Link, Navigate,} from "react-router-dom";
//pages...
import YasiIndex from './pages/YasiIndex';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import YasiMain from './pages/YasiMain'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" exact element = {<YasiIndex />}/>
          <Route path ="/login" element = {<Login />}/>
          <Route path ="/register" element = {<Register />}/>
          <Route path ="/logout" element = {<Logout />}/>
          <Route path ="/yasimain" element = {<YasiMain />}/>
        </Routes>

      </Router>
    </div>

  );
}

export default App;
