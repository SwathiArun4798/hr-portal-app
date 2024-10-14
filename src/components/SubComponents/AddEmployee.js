import { useState } from "react";
export default function AddEmployee() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = validateForm(formData);

    if (Object.keys(newError).length === 0) {
      console.log(formData);

    } else {
      setErrors(newError);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.empId) {
      errors.empId = "Employee ID is required";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    }else if(formData.age>23){
      errors.age = "Invalid Age";
    }

    if (!formData.name) {
      errors.name = "Name is required";
    }else if(formData.name>3 && formData.name<15){
      errors.name = "Invalid Name";
    }

    if (!formData.emailId) {
      errors.emailId = "Email ID is required";
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(formData.emailId)) {
      errors.emailId = "Invalid Email ID";
    }

    if (!formData.gender) {
      errors.gender = "Gender is required";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/i.test(formData.phone)) {
      errors.phone = "Invalid Phone number";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    } else if (formData.address.length < 3 || formData.address.length > 10) {
      errors.address = "Address must be between 3 and 10 characters";
    }

    if (!formData.department) {
      errors.department = "Department is required";
    }

    if(!formData.role){
      errors.role = "Role is required";
    }

    setErrors(errors);

    return errors;
  };


  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Add Employee</h3>
      <form className="row" onSubmit={handleSubmit}>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="empId"
            name="empId"
            placeholder="Enter Employee ID"
            onChange={(e) => handleChange(e)}
          />
          {errors.empId && (
            <span className="error-message">{errors.empId}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            placeholder="Enter Age"
            onChange={(e) => handleChange(e)}
          />
          {errors.age && (
            <span className="error-message">{errors.age}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Employee Name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && (
            <span className="error-message">{errors.name}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email ID"
            onChange={(e) => handleChange(e)}
          />
          {errors.emailId && (
            <span className="error-message">{errors.emailId}</span>
          )}
        </div>
        <div className="form-group col-4">
          <select className="form-select" id="inputGroup">
            <option selected>Gender...</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          {errors.gender && (
            <span className="error-message">{errors.gender}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            onChange={(e) => handleChange(e)}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Enter Address"
            onChange={(e) => handleChange(e)}
          />
          {errors.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            placeholder="Enter Department"
            onChange={(e) => handleChange(e)}
          />
          {errors.department && (
            <span className="error-message">{errors.department}</span>
          )}
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            placeholder="Enter Role"
            onChange={(e) => handleChange(e)}
          />
          {errors.role && (
            <span className="error-message">{errors.role}</span>
          )}
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary col-2 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
