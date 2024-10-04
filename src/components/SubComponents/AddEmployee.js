export default function AddEmployee() {
    return (
        <div className="container sub-container col-8 mt-5 text-center">
            <h3>Add Employee</h3>
            <form >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Employee Name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email ID"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone Number"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="department"
                        placeholder="Enter Department"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Enter Role"    
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}