import React, { Component } from "react";
import NavBar from "./NavBar";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import MainContent from "./MainContent";
import { Routes, Route } from "react-router";
import Home from "./Home";
import AddAccountHolder from "./AddAccountHolder";
import UpdateAccountHolder from "./UpdateAccountHolder";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/maincontent" element={<MainContent />} />
          <Route path="/add-account-holder" element={<AddAccountHolder />} />
          <Route
            path="/update-account-holder/:accountId"
            element={<UpdateAccountHolder />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
