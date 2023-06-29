import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setMessage("Username and password are required");
      return;
    }

    axios
      .post("http://localhost:3001/login", { username, password })
      .then((response) => {
        console.log("Login successful");
        if (response.status === 201) {
          // Navigate to MainContent component upon successful login
          navigate("/maincontent");
        } else {
          // Display error message for unsuccessful login
          setMessage("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
        // Display error message for failed login
        setMessage("Login failed");
      });
  };

  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-lg-9">
          <h4 className="m-1 p-2 text-center">Login</h4>
          <div className="form-group form-row justify-content-center">
            <input
              type="text"
              className="form-control col-lg-4  placeholder-transparent text-center"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="form-group form-row justify-content-center">
            <input
              type="password"
              className="form-control col-lg-4  placeholder-transparent text-center"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group form-row justify-content-center">
            <button
              className="btn btn-primary m-1 align-items-center"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="text-center">{message}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
