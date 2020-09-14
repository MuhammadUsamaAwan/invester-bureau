import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const changeHandler = (e) => {
    if (e.target.id === "login-email")
      setLogin({ ...login, email: e.target.value });
    if (e.target.id === "login-password")
      setLogin({ ...login, password: e.target.value });
    console.log(login);
  };
  return (
    <section className="login">
      <h2 className="login__heading">Login</h2>
      <form className="form">
        <div className="form__group">
          <i className="form__icon fa fa-envelope" />
          <input
            type="email"
            className="form__input"
            placeholder="Email"
            id="login-email"
            value={login.email}
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
            id="login-password"
            value={login.password}
            onChange={changeHandler}
            required
          />
        </div>
        <input type="submit" className="form__submit" value="Login" />
      </form>
      <Link className="mb-1" to="/forgotpassword">
        Forgot Password?
      </Link>
      <div>
        Don't have an account? &nbsp;
        <Link to="/forgotpassword">Sign Up</Link>
      </div>
    </section>
  );
};

export default Login;
