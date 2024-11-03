import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import {
  fetchLeaveDetails,
  updateLeaveDetails,
} from "../../redux/leaveDetailsReducer";
export default function LeaveRequests() {
  const dispatch = useDispatch();
  const leaveDetails = useSelector((state) => state.leaveDetails);
  const data = leaveDetails.data;
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchLeaveDetails());
  }, [dispatch]);

  const action = (e, leave) => {
    let status = "Pending";
    if (e.target.innerText.toLowerCase() === "approve") {
      document.getElementById("status").style.color = "green";
      status = "Approved";
    } else if (e.target.innerText.toLowerCase() === "reject") {
      status = "Rejected";
      document.getElementById("status").style.color = "red";
    }
    dispatch(updateLeaveDetails({ ...leave, status: status })).then(() =>
      dispatch(fetchLeaveDetails())
    );
  };

  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Leave Requests</h3>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        View Leave Requests
      </button>
      <Modal show={show} onHide={() => setShow(false)} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>Leave Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) && data.length > 0 ? (
                data.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.empId}</td>
                    <td>{leave.name}</td>
                    <td>{leave.department}</td>
                    <td>{leave.leaveType}</td>
                    <td>{leave.startDate}</td>
                    <td>{leave.endDate}</td>
                    <th className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          action(e, leave);
                        }}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          action(e, leave);
                        }}
                      >
                        Reject
                      </button>
                    </th>
                    <td id="status" className="fw-bold">
                      {leave.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center">
                    No Leave Requests
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
}
