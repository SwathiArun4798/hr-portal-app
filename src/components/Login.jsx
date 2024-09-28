import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [employee, setEmployee] = useState(false);
  const [hr, setHr] = useState(false);

  const submitForm = () => {
    console.log(userName, password, employee, hr);
  };

  return (
    <div className="container login-container">
      <h2 className="text-center">Login</h2>
      <form action={submitForm()}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="toggle">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Employee"
              id="employee"
              onChange={(e) => setEmployee(e.target.value)}
            />
            <label className="form-check-label" htmlFor="employee">
              Employee
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Hr"
              id="Hr"
              onChange={(e) => setHr(e.target.value)}
            />
            <label className="form-check-label" htmlFor="Hr">
              HR
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary d-block text-center">
          Login
        </button>
        <button className="link" onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  employee: PropTypes.bool.isRequired,
  hr: PropTypes.bool.isRequired,
};
