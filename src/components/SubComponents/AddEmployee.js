import { useState, useRef } from "react";
import { Formik } from "formik";
import { Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { addUser, fetchUsers } from "../../redux/userReducer";
import Modal from "react-bootstrap/Modal";
import { ValidateForms } from "./../../functionalities/ValidateForms";
function AddEmployee() {
  const users = useSelector((state) => state.users);
  const data = users.data;
  const dispatch = useDispatch();
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    empId: 0,
    name: "",
    age: 0,
    gender: "",
    emailId: "",
    password: "",
    phone: "",
    role: "",
    department: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age" || name === "empId") {
      setFormData((values) => ({ ...values, [name]: parseInt(value, 10) }));
    } else if (name !== "emailId") {
      setFormData((values) => ({
        ...values,
        [name]: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      }));
    } else {
      setFormData((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = ValidateForms(formData);
    if (Object.keys(newError).length > 0) {
      alert("Please fill the form correctly");
      return;
    }

    const existing = data.find(
      (user) =>
        user.empId === parseInt(formData.empId, 10) ||
        user.emailId === formData.emailId
    );

    if (existing) {
      alert("Employee already exists");
      formRef.current.reset();
    } else {
      setFormData((values) => ({ ...values }));
      dispatch(addUser(formData));
      formRef.current.reset();
      alert("Employee added successfully");
      dispatch(fetchUsers());
    }
  };

  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Add Employee</h3>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Add Employee
      </button>
      <Modal show={show} onHide={() => setShow(false)} className="modal-lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik>
            <form className="row" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group col-12 col-md-4">
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

              <div className="form-group col-12 col-md-4">
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
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group col-12 col-md-4">
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
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group col-12 col-md-4">
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
                  <option className="option" value="">
                    Select Gender
                  </option>
                  <option className="option" value="Male">
                    Male
                  </option>
                  <option className="option" value="Female">
                    Female
                  </option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group col-12 col-md-4">
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

              <div className="form-group col-12 col-md-4">
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

              <div className="form-group col-12 col-md-4">
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

              <div className="form-group col-12 col-md-4">
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

              <div className="form-group col-12 col-md-4">
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
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mt-1 text-center">
                <button type="submit" className="btn btn-primary col-2 ">
                  Submit
                </button>
              </div>
            </form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddEmployee;
