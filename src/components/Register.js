import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Register() {
  const [emailId, setEmailId] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(1234);

  const navigate = useNavigate();

  const validateEmailID = () => {
    document.getElementByClassName("otpNo").style.display = "block";
  };

  return (
    <div className="container register-container">
      <h2 className="text-center">SignUp</h2>
      <form>
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
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="confirmPwd"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary d-block text-center"
          onClick={() => validateEmailID()}
        >
          Validate Email ID
        </button>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="otp"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <span className="otpNo">Enter {otp}</span>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

Register.propTypes = {
  emailId: PropTypes.string.isRequired,
  createPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  otp: PropTypes.number.isRequired,
}
