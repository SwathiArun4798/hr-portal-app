import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLeaveDetails,
  fetchLeaveDetails,
} from "../../redux/leaveDetailsReducer";
import { fetchUsers } from "../../redux/userReducer";

export default function LeaveApply(userData) {
  const dispatch = useDispatch();
  const leaveDetails = useSelector((state) => state.leaveDetails);
  const leaveData = leaveDetails.data;

  const [formData, setFormData] = useState({
    empId: 0,
    name: "",
    department: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchLeaveDetails());
    setFormData((prevValues) => ({
      ...prevValues,
      empId: userData.data.empId,
      name: userData.data.name,
      department: userData.data.department,
      status: "Pending",
    }));
  }, [userData, dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const applyLeave = (e) => {
    e.preventDefault();
    alert("Leave applied successfully");
    dispatch(addLeaveDetails(formData));
    setFormData({
      empId: 0,
      name: "",
      department: "",
      leaveType: "",
      startDate: "",
      endDate: "",
      status: "",
    });
  };

  const viewLeave = (e) => {
    e.preventDefault();
    dispatch(fetchLeaveDetails()).then(() => {
      if (leaveData.length === 0) {
        alert("No leave applied yet");
      } else {
        alert(
          `Your leave status is: ${leaveData[leaveData.length - 1].status}`
        );
      }
    });
  };

  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Leave Apply</h3>
      <form className="row">
        <div className="form-group col-4">
          <label>Leave Type</label>
          <select
            className="form-select"
            defaultValue="Select type"
            onChange={(e) => handleChange(e)}
            name="leaveType"
          >
            <option className="option" value="Select type">Select type</option>
            <option className="option" value="Sick Leave">Sick Leave</option>
            <option className="option" value="Earned Leave">Earned Leave</option>
            <option className="option" value="Casual Leave">Casual Leave</option>
          </select>
        </div>
        <div className="form-group col-4">
          <label>Start Date</label>
          <input
            type="Date"
            className="form-control"
            id="startDate"
            placeholder="Start Date"
            onChange={(e) => handleChange(e)}
            name="startDate"
          />
        </div>
        <div className="form-group col-4">
          <label>End Date</label>
          <input
            type="Date"
            className="form-control"
            id="endDate"
            placeholder="End Date"
            onChange={(e) => handleChange(e)}
            name="endDate"
          />
        </div>
        <div className="mt-2 d-flex justify-content-center gap-2">
          <button className="btn btn-primary" onClick={(e) => applyLeave(e)}>
            Apply
          </button>
          <button className="btn btn-secondary" onClick={(e) => viewLeave(e)}>
            View Status
          </button>
        </div>
      </form>
    </div>
  );
}
