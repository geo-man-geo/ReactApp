import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-9">
          <h4
            className="d-flex justify-content-center align-items-center offset-lg-2 col-lg-120 text-strong"
            style={{ height: "80vh" }}
          >
            <span className="text-primary">
              <span
                className="d-inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #007BFF, #008B8B)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozBackgroundClip: "text",
                  MozTextFillColor: "transparent",
                }}
              >
                WELCOME TO THE DUMMY APP, CLICK{" "}
                <Link
                  to="/register"
                  className="text-light"
                  style={{ fontWeight: "bold" }}
                >
                  HERE
                </Link>{" "}
                TO REGISTER/LOGIN
              </span>
            </span>
          </h4>
          <div className="form-group form-row justify-content-center"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
