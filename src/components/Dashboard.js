import { useEffect } from "react";
import LeaveApply from "./SubComponents/LeaveApply";
import LeaveRequests from "./SubComponents/LeaveRequests";
import AddEmployee from "./SubComponents/AddEmployee";
import EmployeeDetails from './SubComponents/employeeDetails';
import { useLocation } from "react-router-dom";
function Dashboard() {  

  const location = useLocation();
  const data = location.state;

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    
  }, [quotes]);

  return (
    <div className="container dashboard-container gx-0">
      <header>
        <h2 className="title">
          HR Portal /<span className="subtitle"> {data.department} Dashboard</span>
        </h2>
        <h3>
          Welcome <span className="userName">{data.name}</span>!
        </h3>
        <h3 className="">
          <i className="bi bi-box-arrow-right"></i> LOG OUT
        </h3>
      </header>

      <main className="row gx-0 justify-content-center">
        <section className="quotes mt-3 mb-2 col-12">
          <h2>Daily Quotes</h2>
          <p id="quotes">{quotes[Math.floor(Math.random() * quotes.length)]}</p>
        </section>

        <section className="col-12">
          {data.department === "Employee" ? (
            <div className="row gx-0 d-flex justify-content-center align-items-center col-12">
              <LeaveApply />
              <EmployeeDetails {...data.department}/>
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

export default Dashboard;

