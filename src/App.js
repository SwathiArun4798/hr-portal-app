import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styling/common.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

/**
 * App component, which renders a router with routes to login, register, and
 * dashboard pages.
 *
 * The dashboard page is protected by a ProtectedRoute component, which
 * redirects to the login page if the user is not authenticated.
 *
 * @return {ReactElement} The App component.
 */
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {
    setIsAuthenticated(true);
    console.log("user logged in");
  };

  /**
   * Logs the user out by setting isAuthenticated to false and logging a
   * message to the console.
   */
  const logout = () => {
    setIsAuthenticated(false);
    console.log("user logged out");
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login login={login} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard userName="Guest" user="Employee" logout={logout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
