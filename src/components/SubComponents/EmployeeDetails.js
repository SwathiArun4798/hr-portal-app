import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userReducer";

export default function EmployeeDetails(userData) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [readOnly, setReadonly] = useState(true);
  const [editedData, setEditedData] = useState({
    id: userData.data.id,
    empId: userData.data.empId,
    name: userData.data.name,
    age: userData.data.age,
    gender: userData.data.gender,
    emailId: userData.data.emailId,
    phone: userData.data.phone,
    role: userData.data.role,
    department: userData.data.department,
    address: userData.data.address,
    password: userData.data.password,
  });

  const editDetails = () => {
    setReadonly(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEditedData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const saveDetails = () => {
    setReadonly(true);
    dispatch(updateUser({ ...editedData }));
  };

  return (
    <div className="container sub-container col-4 m-2 text-center">
      <h3>Hello {userData.data.name} </h3>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        View Your Info
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employee ID</td>
                  <td>
                    <input
                      type="text"
                      name="empId"
                      className="form-control"
                      value={editedData.empId}
                      readOnly
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={editedData.name}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      className="form-control"
                      value={editedData.age}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                  <input
                      type="text"
                      name="gender"
                      className="form-control"
                      value={editedData.gender}
                      readOnly
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email ID</td>
                  <td>
                    <input
                      type="email"
                      name="emailId"
                      className="form-control"
                      value={editedData.emailId}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <input
                      type="number"
                      name="phone"
                      className="form-control"
                      value={editedData.phone}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>
                    <input
                      type="text"
                      name="role"
                      className="form-control"
                      value={editedData.role}
                      readOnly
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Department</td>
                  <td>
                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      value={editedData.department}
                      readOnly
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={editedData.address}
                      readOnly={readOnly}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={saveDetails}
          >
            Save
          </button>
          <button className="btn btn-primary" onClick={editDetails}>
            Edit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
