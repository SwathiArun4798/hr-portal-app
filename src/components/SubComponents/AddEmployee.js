export default function AddEmployee() {
  return (
    <div className="container sub-container col-8 m-2 text-center">
      <h3>Add Employee</h3>
      <form className="row">
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Employee Name"
          />
        </div>
        <div className="form-group col-4">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email ID"
          />
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
          />
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="department"
            placeholder="Enter Department"
          />
        </div>
        <div className="form-group col-4">
          <input
            type="text"
            className="form-control"
            id="role"
            placeholder="Enter Role"
          />
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
