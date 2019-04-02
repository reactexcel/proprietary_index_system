import React, { Component } from "react";
import localStore from "../services/localStore";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleLogout = () => {
    localStore("clear");
    this.props.history.push("/");
  };
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleHome = () => {
    this.props.history.push("/homepage");
  };
  render() {
    return (
      <div className="row py-3">
        {this.props.location.pathname !== "/homepage" && (
          <div className="col-md-7 p-md-0">
            <div className="row">
              <div className="col-md-9">
                <button
                  className="btn btn-outline-primary"
                  onClick={this.handleGoBack}
                >
                  <i className="material-icons align-bottom">arrow_back</i>
                </button>
              </div>
              <div
                className="col-md-1 p-md-0 text-center cursor-pointer"
                style={{ marginLeft: "5%" }}
                onClick={this.handleHome}
              >
                <i className="material-icons home-button">home</i>
              </div>
            </div>
          </div>
        )}
        <div
          className={
            "col-md-5 " +
            (this.props.location.pathname === "/homepage"
              ? "offset-md-7 "
              : "") +
            "p-md-0 text-right"
          }
        >
          <button className="btn btn-secondary" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
