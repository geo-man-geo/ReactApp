import React, { Component } from "react";
import axios from "axios";

class UpdateAccountHolder extends Component {
  state = {
    accountHolder: {},
  };

  componentDidMount() {
    const { match } = this.props;
    const { accountId } = match.params;
    this.fetchAccountHolder(accountId);
  }

  fetchAccountHolder = (accountId) => {
    axios
      .get(`http://localhost:3001/holders/${accountId}`)
      .then((response) => {
        this.setState({ accountHolder: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateAccountHolder = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    const { accountHolder } = this.state;

    axios
      .put("http://localhost:3001/holders", accountHolder)
      .then((response) => {
        // Handle successful update
        console.log("Account holder updated:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  render() {
    const { accountHolder } = this.state;

    return (
      <div>
        <h2>Update Account Holder</h2>
        <form onSubmit={this.updateAccountHolder}>
          <div>
            <label>Account Holder Name</label>
            <input
              type="text"
              value={accountHolder.accountHolderName || ""}
              onChange={(e) =>
                this.setState({
                  accountHolder: {
                    ...accountHolder,
                    accountHolderName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label>Nominee Name</label>
            <input
              type="text"
              value={accountHolder.nomineeName || ""}
              onChange={(e) =>
                this.setState({
                  accountHolder: {
                    ...accountHolder,
                    nomineeName: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label>Account ID</label>
            <input
              type="text"
              value={accountHolder.accountId || ""}
              onChange={(e) =>
                this.setState({
                  accountHolder: {
                    ...accountHolder,
                    accountId: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>
            <label>Bank Account Type</label>
            <input
              type="text"
              value={accountHolder.bankAccountType || ""}
              onChange={(e) =>
                this.setState({
                  accountHolder: {
                    ...accountHolder,
                    bankAccountType: e.target.value,
                  },
                })
              }
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateAccountHolder;
