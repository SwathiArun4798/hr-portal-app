import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import HRDashboard from "./components/HRDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styling/common.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hrDashboard" element={<HRDashboard />} />
          <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
