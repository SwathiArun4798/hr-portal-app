import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styling/common.scss";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log("user logged in");
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log("user logged out");
  };


  useEffect(() => {
    if (isAuthenticated) {
      window.history.pushState({}, "", "/dashboard");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login login={login}/>} />
          <Route path="/register" element={<Register/>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard logout={logout}/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
