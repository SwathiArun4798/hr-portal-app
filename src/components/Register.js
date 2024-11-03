import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

export default function Register() {
  const users = useSelector((state) => state.users);
  const data = users.data;

  const dispatch = useDispatch();

  const [emailId, setEmailId] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState();
  const [randomOtp, setRandomOtp] = useState();
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const validateEmailID = (e) => {
    e.preventDefault();
    const user = data.find((user) => user.emailId === emailId);
    if (user) {
      if (createPassword === confirmPassword) {
        setUserData({ ...user });
        document.querySelector("button[type='submit']").disabled = true;
        document.querySelector("#otpContainer").style.display = "flex";
        setRandomOtp(Math.floor(100000 + Math.random() * 900000));
      } else {
        document.querySelector("#otpContainer").style.display = "none";
        alert("Passwords do not match");
      }
    } else {
      alert("User not found in the database");
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (randomOtp === parseInt(otp)) {
      userData.password = createPassword;
      dispatch(updateUser(userData));
      alert("register successfully");
      navigate("/");
    } else {
      alert("Wrong OTP");
    }
  };

  return (
    <div className="container register-container">
      <h2 className="text-center">SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="emailId"
            placeholder="Enter valid Email ID"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="createPwd"
            placeholder="Create password"
            onChange={(e) => setCreatePassword(e.target.value)}
            autoComplete ="off"

          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="confirmPwd"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete ="off"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary d-block text-center"
          onClick={(e) => validateEmailID(e)}
        >
          Validate Email ID
        </button>
        <div id="otpContainer" style={{ display: "none" }}>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <span>Enter {randomOtp}</span>
          </div>
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <span className="text-center">OR</span>
        <Link className="btn btn-secondary" to="/">
          Login
        </Link>
      </form>
    </div>
  );
}

