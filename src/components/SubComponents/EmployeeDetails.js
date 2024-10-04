import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function EmployeeDetails(props) {
    const [show,setShow] = useState(false);
  return (
    <div className="container sub-container col-4 m-2 text-center">
      <h3>Hello {props.userName} </h3>
      <button className="btn btn-primary" onClick={() => setShow(true)}>View Your Info</button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => setShow(false)}>
            Save
          </button>
          <button className="btn btn-primary">Edit</button>
        </Modal.Footer>
      </Modal>

    </div>);
}

EmployeeDetails.defaultProps = {
  userName: "Guest",
};
