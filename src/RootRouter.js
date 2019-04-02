import React, { Component } from "react";
import localStore from "./services/localStore";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";

class RootRouter extends Component {
  authenticate() {
    if (!localStore("token")) {
      if (
        window.location.hash === "#/" ||
        window.location.hash === "#/signup"
      ) {
      } else {
        this.props.history.push("/");
      }
    }
  }
  render() {
    this.authenticate();
    let header;
    if (window.location.hash === "#/" || window.location.hash === "#/signup") {
      header = null;
    } else {
      header = <Header />;
    }
    return (
      <div className="container h-100">
        {header}
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(RootRouter);
