import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class MainContent extends Component {
  state = {
    pageTitle: "Employees",
    employeeCount: 5,
    employees: [
      {
        id: 1,
        Name: "Michael Scott",
        Phone: "89-00",
        address: { city: "Scranton PA" },
        photo: "https:picsum.photos/id/1010/60",
      },
      {
        id: 2,
        Name: "Carrie Mathison",
        Phone: null,
        address: { city: "Brooklyn " },
        photo: "https:picsum.photos/id/1018/60",
      },
      {
        id: 3,
        Name: "Penny Hofstader",
        Phone: "99-33",
        address: { city: "Nebraska" },
        photo: "https:picsum.photos/id/1010/60",
      },
      {
        id: 4,
        Name: "Dwight Schrute",
        Phone: "12-02",
        address: { city: "Scranton PA" },
        photo: "https:picsum.photos/id/1010/60",
      },
      {
        id: 5,
        Name: "Sheldon Cooper",
        Phone: "43-90",
        address: { city: "Texas" },
        photo: "https:picsum.photos/id/1010/60",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <h4>{this.state.pageTitle}</h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerDetails(this.state.employees)}</tbody>
        </table>

        <span className="badge badge-secondary m-2">
          {this.state.employeeCount}
        </span>
        <button className="btn btn-info" onClick={this.onRefreshClick}>
          Refresh
        </button>
      </React.Fragment>
    );
  }

  //Executes when the user clicks the refresh button
  onRefreshClick = () => {
    this.setState({
      employeeCount: this.state.employeeCount + 1,
    });
  };

  getPhoneToRender = (Phone) => {
    return Phone ? (
      Phone
    ) : (
      <div className="bg-warning p-1 text-center">N/A</div>
    );
  };

  getCustomerDetails = (employees) => {
    return this.state.employees.map((emp) => {
      return (
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>
            <img src={emp.photo} alt="Employee" />
          </td>
          <td>{emp.Name}</td>
          <td>{this.getPhoneToRender(emp.Phone)}</td>
          <td>{emp.address.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
