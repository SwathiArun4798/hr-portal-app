import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login(props) {
  const users = useSelector((state) => state.users);
  const data = users.data;

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    department: "Employee",
  });

  const [errors, setErrors] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value, id } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (id === "employeeCheckBox") {
      setFormData((values) => ({ ...values, department: "Employee" }));
      document.getElementById("hrCheckBox").checked = false;
    }

    if (id === "hrCheckBox") {
      setFormData((values) => ({ ...values, department: "HR" }));
      document.getElementById("employeeCheckBox").checked = false;
    }
  };

  useEffect(()=>{
    if(errors === ""){
      navigate('/dashboard', {state:data[index]});
      props.login();
    }
  },[data, errors, index, navigate, props])


  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = validateForm(formData);
    setErrors(newError);
  };



  const validateForm = (formData) => {
    
    let newError = "";
    if(data){
      for (let i = 0; i < data.length; i++) {
        if(
          formData.emailId.toUpperCase() === data[i].emailId.toUpperCase() 
          && formData.password.toUpperCase() === data[i].password.toUpperCase()
          && formData.department.toUpperCase() === data[i].department.toUpperCase()
        ){
          setIndex(i);
          newError = "";
          break;
        }else{
          newError = "Invalid Credentials";
        }
      }
    }else{
      newError = "Invalid Credentials";
    }
    return newError;
  };

  return (
    <div className="container login-container">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="emailId"
            id="emailId"
            placeholder="Enter Email ID"
            value={formData.emailId}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </div>

        <div className="toggle">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="department"
              id="employeeCheckBox"
              onChange={(e) => handleChange(e)}
            />
            <label className="form-check-label" htmlFor="employee">
              Employee
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="department"
              id="hrCheckBox"
              onChange={(e) => handleChange(e)}
            />
            <label className="form-check-label" htmlFor="Hr">
              HR
            </label>
          </div>
        </div>

        {errors && <div className="error-message">{errors}</div>}

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

