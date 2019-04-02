import React, { Component } from "react";

class CalenderInputs extends Component {
  onAlertClick = () => {
    this.props.history.push({
      pathname: "/alerttype",
      state: this.props.location.state
    });
  };
  onPastEventClick = () => {
    this.props.history.push({
      pathname: "/pasteventtype",
      state: this.props.location.state
    });
  };
  render() {
    return (
      <div className="row h-75 text-center">
        <div className="col-12 font-weight-bold">
          {this.props.location.state.title} Tranche{" "}
          {this.props.location.state.tranche}
        </div>
        <div className="col-md-6 mt-5">
          <div
            className="card card-block card-homepage"
            onClick={this.onPastEventClick}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Past Events
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <div
            className="card card-block card-homepage"
            onClick={this.onAlertClick}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Alert
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalenderInputs;
