import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddAccountHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountHolderName: "",
      nomineeName: "",
      bankAccountType: "",
      accountId: "",
      message: "",
    };
  }

  onAddClick = () => {
    const { accountHolderName, nomineeName, bankAccountType, accountId } =
      this.state;

    if (
      accountHolderName.trim() === "" ||
      nomineeName.trim() === "" ||
      bankAccountType.trim() === "" ||
      accountId.trim() === ""
    ) {
      this.setState({ message: "All fields are required" });
      return;
    }

    // Make POST API request here
    axios
      .post("http://localhost:3001/add-account-holder", {
        accountHolderName,
        nomineeName,
        bankAccountType,
        accountId,
      })
      .then((response) => {
        // API request successful, redirect to "/maincontent"
        this.props.history.push("/maincontent");
      })
      .catch((error) => {
        // Handle error if necessary
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", marginTop: "-20vh" }}
        >
          <div className="col-lg-9">
            <h4 className="m-1 p-2 text-center">Add new account holder</h4>
            <div className="p-1">
              <div className="form-group form-row justify-content-center">
                <input
                  type="text"
                  className="form-control col-lg-4  placeholder-transparent text-center"
                  placeholder="Enter the Account Holder Name"
                  value={this.state.accountHolderName}
                  onChange={(event) => {
                    this.setState({ accountHolderName: event.target.value });
                  }}
                />
              </div>

              <div className="form-group form-row justify-content-center">
                <input
                  type="text"
                  className="form-control col-lg-4  placeholder-transparent text-center"
                  placeholder="Enter the Nominee Name"
                  value={this.state.nomineeName}
                  onChange={(event) => {
                    this.setState({ nomineeName: event.target.value });
                  }}
                />
              </div>

              <div className="form-group form-row justify-content-center">
                <input
                  type="text"
                  className="form-control col-lg-4  placeholder-transparent text-center"
                  placeholder="Enter the Account Number Generated"
                  value={this.state.accountId}
                  onChange={(event) => {
                    this.setState({ accountId: event.target.value });
                  }}
                />
              </div>

              <div className="form-group form-row justify-content-center">
                <select
                  className="form-control col-lg-4 justify-content-center text-center"
                  value={this.state.bankAccountType}
                  onChange={(event) => {
                    this.setState({ bankAccountType: event.target.value });
                  }}
                >
                  <option value="">Select the Account Type</option>
                  <option value="Loan account">Loan Account</option>
                  <option value="Overdraft account">Overdraft Account</option>
                  <option value="Savings Account">Savings Account</option>
                  <option value="Current Account">Current Account</option>
                </select>
              </div>

              <div className="form-group form-row justify-content-center">
                <Link to="/maincontent">
                  <button
                    className="btn btn-primary m-1 align-items-center"
                    onClick={this.onAddClick}
                  >
                    Add Account
                  </button>
                </Link>
              </div>

              <div className="text-center">{this.state.message}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddAccountHolder;
