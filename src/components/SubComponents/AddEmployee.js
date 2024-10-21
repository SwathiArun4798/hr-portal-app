import { useState, useRef } from "react";
import { Formik } from "formik";
import { Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser,fetchUsers } from "../../redux/userReducer";
function AddEmployee() {
  const users = useSelector((state) => state.users);
  const data = users.data;
  const dispatch = useDispatch();
  const formRef = useRef();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age" || name === "empId") {
      setFormData((values) => ({ ...values, [name]: parseInt(value, 10) }));
    } else {
      setFormData((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = data.find(
      (user) =>
        user.empId === parseInt(formData.empId, 10) ||
        user.emailId === formData.emailId
    );

    if (existing) {
      alert("Employee already exists");
      formRef.current.reset();
    } else {
      dispatch(addUser(formData));
      formRef.current.reset();
      alert("Employee added successfully");
      dispatch(fetchUsers());
    }
  };

  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Add Employee</h3>
      <Formik>
        <form className="row" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group col-4">
            <Field
              type="number"
              name="empId"
              placeholder="Enter Employee ID"
              className="form-control"
              validate={(value = formData.empId) => {
                let error;
                if (!value) {
                  error = "Employee ID is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage
              name="empId"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              validate={(value = formData.name) => {
                let error;
                if (!value) {
                  error = "Name is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group col-4">
            <Field
              type="number"
              name="age"
              placeholder="Enter Age"
              className="form-control"
              validate={(value = formData.age) => {
                let error;
                if (!value) {
                  error = "Age is required";
                } else if (value < 18) {
                  error = "Age should be above 18";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage name="age" component="div" className="text-danger" />
          </div>

          <div className="form-group col-4">
            <Field
              component="select"
              name="gender"
              className="form-control"
              validate={(value = formData.gender) => {
                let error;
                if (!value) {
                  error = "Gender is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="email"
              name="emailId"
              placeholder="Enter Email ID"
              className="form-control"
              validate={(value = formData.emailId) => {
                let error;
                if (!value) {
                  error = "Email ID is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage
              name="emailId"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="number"
              name="phone"
              placeholder="Enter Phone"
              className="form-control"
              validate={(value = formData.phone) => {
                let error;
                if (!value) {
                  error = "Phone is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="text"
              name="address"
              placeholder="Enter Address"
              className="form-control"
              validate={(value = formData.address) => {
                let error;
                if (!value) {
                  error = "Address is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="text"
              name="department"
              placeholder="Enter Department"
              className="form-control"
              validate={(value = formData.department) => {
                let error;
                if (!value) {
                  error = "Department is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage
              name="department"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group col-4">
            <Field
              type="text"
              name="role"
              placeholder="Enter Role"
              className="form-control"
              validate={(value = formData.role) => {
                let error;
                if (!value) {
                  error = "Role is required";
                }
                return error;
              }}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage name="role" component="div" className="text-danger" />
          </div>

          <div className="mt-1">
            <button type="submit" className="btn btn-primary col-2 ">
              Submit
            </button>
          </div>
        </form>
      </Formik>
    </div>
  );
}

export default AddEmployee;