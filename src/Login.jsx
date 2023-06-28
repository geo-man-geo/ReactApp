import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
  }

  render() {
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
                value={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
            </div>

            <div className="form-group form-row justify-content-center">
              <input
                type="password"
                className="form-control col-lg-4  placeholder-transparent text-center"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              />
            </div>

            <div className="form-group form-row justify-content-center">
              <button
                className="btn btn-primary m-1 align-items-center"
                onClick={this.onLoginClick}
              >
                Login
              </button>
            </div>
            <div className="text-center">{this.state.message}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "sample@sample.com" &&
      this.state.password === "sample"
    ) {
      this.setState({
        message: <span className="text-success">Successfully Logged in</span>,
      });
    } else {
      this.setState({
        message: <span className="text-danger">Incorrect credentials </span>,
      });
    }
  };
}

export default Login;
