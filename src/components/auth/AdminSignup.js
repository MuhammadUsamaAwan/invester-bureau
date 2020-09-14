import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSignup = () => {
  const [adminSignup, setAdminSignup] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeHandler = (e) => {
    if (e.target.id === "adminSignup-name")
      setAdminSignup({ ...adminSignup, name: e.target.value });
    if (e.target.id === "adminSignup-email")
      setAdminSignup({ ...adminSignup, email: e.target.value });
    if (e.target.id === "adminSignup-password")
      setAdminSignup({ ...adminSignup, password: e.target.value });
    if (e.target.id === "adminSignup-password2")
      setAdminSignup({ ...adminSignup, password2: e.target.value });
  };
  return (
    <section className="adminSignup">
      <h2 className="adminSignup__heading">Sign Up</h2>
      <form className="form">
        <div className="form__group">
          <i className="form__icon fa fa-user" />
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            id="adminSignup-name"
            value={adminSignup.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-envelope" />
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            id="adminSignup-email"
            value={adminSignup.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-lock" />
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="adminSignup-password"
            value={adminSignup.password}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-lock" />
          <input
            type="password"
            className="form__input"
            placeholder="Confirm Password"
            id="adminSignup-password2"
            value={adminSignup.password2}
            onChange={changeHandler}
            required
          />
        </div>
        <input type="submit" className="form__submit" value="Sign Up" />
      </form>
      <div>
        Already have an account? &nbsp;
        <Link to="/forgotpassword">Login</Link>
      </div>
    </section>
  );
};

export default AdminSignup;
