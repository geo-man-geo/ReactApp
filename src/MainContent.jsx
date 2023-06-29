import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

class MainContent extends Component {
  state = {
    pageTitle: "Account Holders",
    holders: [],
  };

  componentDidMount() {
    this.fetchAccountHolders();
  }

  fetchAccountHolders = () => {
    axios
      .get("http://localhost:3001/holders") // Replace with your API endpoint
      .then((response) => {
        this.setState({ holders: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this account holder?"
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3001/account-holder/${id}`)
        .then(() => {
          console.log(`Deleted holder with id ${id}`);
          // After deletion, fetch the updated account holders
          this.fetchAccountHolders();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Deletion canceled by user");
    }
  };

  renderHolderRows = (holders) => {
    return holders.map((holder, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{holder.accountHolderName}</td>
        <td>{holder.nomineeName}</td>
        <td>{holder.accountId}</td>
        <td>{holder.bankAccountType}</td>
        <td>
          <span className="mr-2">
            <Link to={`/update-account-holder/${holder.accountId}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </span>
          <span>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(holder.accountId)}
            >
              Delete
            </button>
          </span>
        </td>
      </tr>
    ));
  };

  render() {
    const { holders } = this.state;

    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h4 className="text-center">{this.state.pageTitle}</h4>
          </div>
          <div className="col-auto mt-2">
            <Link to="/add-account-holder">
              <button className="btn btn-primary">Add Account Holders</button>
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Account Holder Name</th>
              <th>Nominee Name</th>
              <th>Account ID</th>
              <th>Account Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderHolderRows(holders)}</tbody>
        </table>
      </div>
    );
  }
}

export default MainContent;
