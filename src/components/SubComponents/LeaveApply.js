export default function LeaveApply() {
  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Leave Apply</h3>
      <form className="row">
        <div className="form-group col-4">
            <label>Leave Type</label>
          <select className="form-select">
            <option selected>Select type</option>
            <option value="1">Sick Leave</option>
            <option value="2">Earned Leave</option>
            <option value="3">Casual Leave</option>
          </select>
        </div>
        <div className="form-group col-4">
            <label>Start Date</label>
          <input
            type="Date"
            className="form-control"
            id="startDate"
            placeholder="Start Date"
          />
        </div>
        <div className="form-group col-4">
            <label>End Date</label>
          <input
            type="Date"
            className="form-control"
            id="endDate"
            placeholder="End Date"
          />
        </div>
        <div className="form-group col-4">
            <label>Reason</label>
          <input
            type="text"
            className="form-control"
            id="reason"
            placeholder="Reason"
          />
        </div>
        <div className="form-group col-4">
            <label>Attachment</label>
          <input
            type="file"
            className="form-control"
            id="attachment"
            placeholder="Attachment"
          />
        </div>
        <div className="form-group col-4">
            <label>Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            placeholder="Status"
            value="Pending"
            disabled
          />
        </div>
        <div className="mt-2">
            <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
}
