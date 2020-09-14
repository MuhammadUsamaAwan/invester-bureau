import React, { useState } from "react";
import { Link } from "react-router-dom";

const SuperAdminSignup = () => {
  const [superAdminSignup, setSuperAdminSignup] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeHandler = (e) => {
    if (e.target.id === "superAdminSignup-name")
      setSuperAdminSignup({ ...superAdminSignup, name: e.target.value });
    if (e.target.id === "superAdminSignup-email")
      setSuperAdminSignup({ ...superAdminSignup, email: e.target.value });
    if (e.target.id === "superAdminSignup-password")
      setSuperAdminSignup({ ...superAdminSignup, password: e.target.value });
    if (e.target.id === "superAdminSignup-password2")
      setSuperAdminSignup({ ...superAdminSignup, password2: e.target.value });
  };
  return (
    <section className="superAdminSignup">
      <h2 className="superAdminSignup__heading">Sign Up</h2>
      <form className="form">
        <div className="form__group">
          <i className="form__icon fa fa-user" />
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            id="superAdminSignup-name"
            value={superAdminSignup.name}
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
            id="superAdminSignup-email"
            value={superAdminSignup.email}
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
            id="superAdminSignup-password"
            value={superAdminSignup.password}
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
            id="superAdminSignup-password2"
            value={superAdminSignup.password2}
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

export default SuperAdminSignup;
