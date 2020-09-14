import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    investmentAmount: "",
    investmentType: "",
    password: "",
    password2: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("req sent");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      customerFirstName: signup.name,
      customerLastName: signup.password,
      customerEmail: signup.email,
    });
    try {
      const res = await axios.post(
        "http://192.168.10.6:8080/customers",
        body,
        config
      );
      console.log(res);
    } catch (err) {
      console.error("Error");
    }
  };
  const changeHandler = (e) => {
    if (e.target.id === "signup-name")
      setSignup({ ...signup, name: e.target.value });
    if (e.target.id === "signup-email")
      setSignup({ ...signup, email: e.target.value });
    if (e.target.id === "signup-phone")
      setSignup({ ...signup, phone: e.target.value });
    if (e.target.id === "signup-cnic")
      setSignup({ ...signup, cnic: e.target.value });
    if (e.target.id === "signup-password")
      setSignup({ ...signup, password: e.target.value });
    if (e.target.id === "signup-password2")
      setSignup({ ...signup, password2: e.target.value });
    if (e.target.id === "signup-investmentAmount")
      setSignup({ ...signup, investmentAmount: e.target.value });
    if (e.target.id === "signup-investmentType")
      setSignup({ ...signup, investmentType: e.target.value });
  };
  return (
    <section className="signup">
      <h2 className="signup__heading">Sign Up</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="form__group">
          <i className="form__icon fa fa-user" />
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            id="signup-name"
            value={signup.name}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-envelope" />
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            id="signup-email"
            value={signup.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-phone" />
          <input
            type="tel"
            pattern="{0}{3}[0-9]"
            className="form__input"
            placeholder="Cell# 03XXXXXXXXX Format"
            id="signup-phone"
            value={signup.phone}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-address-book" />
          <input
            type="tel"
            pattern="[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
            className="form__input"
            placeholder="CNIC Without Spaces"
            id="signup-cnic"
            value={signup.cnic}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-dollar" />
          <input
            type="number"
            className="form__input"
            placeholder="Investment Amount"
            id="signup-investmentAmount"
            value={signup.investmentAmount}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-money" />
          <select
            id="signup-investmentType"
            defaultValue="Investment Type"
            className="form__input"
          >
            <option value="Investment Type" disabled>
              Investment Type
            </option>
            <option value="Residence">Residence</option>
            <option value="Commercial">Commercial</option>
            <option value="Stock/International Market">
              Stock/International Market
            </option>
          </select>
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-lock" />
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="signup-password"
            value={signup.password}
            onChange={changeHandler}
          />
        </div>
        <div className="form__group">
          <i className="form__icon fa fa-lock" />
          <input
            type="password"
            className="form__input"
            placeholder="Confirm Password"
            id="signup-password2"
            value={signup.password2}
            onChange={changeHandler}
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

export default Signup;
