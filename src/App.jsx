import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";

function App() {
  return (
<Router>
      <div className="container mt-4">
        <h1 className="text-center text-primary">Person Management</h1>
        
        
        <nav className="mb-4">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Add Person</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/persons">View Persons</Link>
            </li>
          </ul>
        </nav>

       
        <Routes>
          <Route path="/" element={<AddPerson />} />
          <Route path="/persons" element={<PersonList />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
