import React, { Component } from "react";

class Submissions extends Component {
  handleDraftClick = () => {
    this.props.history.push({ pathname: "/submissionmail" });
  };
  render() {
    return (
      <div className="row h-75 mt-5">
        <div className="col-md-6">
          <div
            className="card card-block card-homepage"
            onClick={this.handleDraftClick}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Submission to Citi Draft
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card card-block card-homepage"
            onClick={this.handleFinalClick}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Submission to Citi Final
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

export default Submissions;
