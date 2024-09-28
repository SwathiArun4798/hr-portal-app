import React from "react";
export default class EmployeeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName,
    };
  }
  render() {
    return (
      <div className="container employee-container">
      <header className="d-flex justify-content-between align-items-center py-3 px-4 border-bottom">
        <h2 className="title">HR Portal <span className="subtitle">/ Employee Dashboard</span></h2>
        <div className="d-flex justify-content-end">
          <h3 className="userName me-3">Welcome {this.props.userName}!</h3>
          <h4 className="m-0"><i className="bi bi-box-arrow-right"></i> LOG OUT</h4>
        </div>
      </header>
      <main></main>
      <footer></footer>
      </div>
    );
  }
}

EmployeeDashboard.defaultProps = {
  userName: "Guest",
}
