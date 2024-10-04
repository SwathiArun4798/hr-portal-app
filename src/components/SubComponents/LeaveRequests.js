import { useState } from "react";
export default function LeaveRequests() {
    const [status, setStatus] = useState("Pending");
    const action = (e) => {
        if(e.target.innerText.toLowerCase() === "approve") {
            setStatus("Approved");
            document.getElementById("status").style.color = "green";
        }
        else if(e.target.innerText.toLowerCase() === "reject") {
            setStatus("Rejected");
            document.getElementById("status").style.color = "red";
        }
        else if(e.target.innerText.toLowerCase() === "pending") {
            setStatus("Pending");
        }
    }

    return (
        <div className="container sub-container col-8 m-2 text-center">
            <h3>Leave Requests</h3>
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
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>HR</td>
                        <td>Annual Leave</td>
                        <td>2022-07-01</td>
                        <td>2022-07-05</td>
                        <th className="d-flex justify-content-center align-items-center gap-2">
                            <button className="btn btn-primary" onClick={(e) => {action(e)}}>Approve</button>
                            <button className="btn btn-danger" onClick={(e) => {action(e)}}>Reject</button>
                        </th>
                        <td id="status" className="fw-bold">{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

