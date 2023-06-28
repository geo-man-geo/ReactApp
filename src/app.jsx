import React, { Component } from "react";
import NavBar from "./NavBar";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Register />
        <Routes>
          <Route path="/" exact Component={Register} />
          <Route path="/login" exact Component={Login} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
