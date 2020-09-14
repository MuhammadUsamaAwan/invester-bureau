import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/sass/main.scss";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import SuperAdminSignup from "./components/auth/SuperAdminSignup";
import AdminSignup from "./components/auth/AdminSignup";

function App() {
  return (
    <Router>
      <div className="container">
        <Signup />
        {/* <Login /> */}
        {/* <SuperAdminSignup /> */}
        {/* <AdminSignup /> */}
      </div>
    </Router>
  );
}

export default App;
