import { useEffect } from "react";
import LeaveApply from "./SubComponents/LeaveApply";
import LeaveRequests from "./SubComponents/LeaveRequests";
import AddEmployee from "./SubComponents/AddEmployee";
import EmployeeDetails from './SubComponents/EmployeeDetails';
export default function Dashboard(props) {
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life you'll always have more. If you look at what you don't have in life you'll never have enough.",
  ];

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("quotes").innerHTML =
        quotes[Math.floor(Math.random() * quotes.length)];
    }, 3000);
  }, [props.userName]);

  return (
    <div className="container dashboard-container gx-0">
      <header>
        <h2 className="title">
          HR Portal /<span className="subtitle"> {props.user} Dashboard</span>
        </h2>
        <h3>
          Welcome <span className="userName">{props.userName}</span>!
        </h3>
        <h4 className="">
          <i className="bi bi-box-arrow-right"></i> LOG OUT
        </h4>
      </header>

      <main className="row gx-0 justify-content-center">
        <section className="quotes mt-3 mb-2 col-12">
          <h2>Daily Quotes</h2>
          <p id="quotes">{quotes[Math.floor(Math.random() * quotes.length)]}</p>
        </section>

        <section className="col-12">
          {props.user === "Employee" ? (
            <div className="row gx-0 d-flex justify-content-center align-items-center col-12">
              <LeaveApply />
              <EmployeeDetails {...props.userName}/>
            </div>
          ) : (
            <div className="row gx-0 d-flex justify-content-center align-items-center col-12">
              <LeaveRequests />
              <AddEmployee />
            </div>
          )}
        </section>
      </main>

      <footer>
        <p className="text-center">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

Dashboard.defaultProps = {
  userName: "Guest",
};
