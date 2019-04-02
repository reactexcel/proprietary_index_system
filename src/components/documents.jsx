import React, { Component } from "react";

class Documents extends Component {
  onTermSheet = () => {
    this.props.history.push("/termsheet");
  };
  onGlobalNote = () => {
    this.props.history.push("/globalnote");
  };
  handleGoBack = () => {
    this.props.history.push("/notes");
  };
  render() {
    return (
      <div className="row h-75">
        <div className="col-md-2 mt-sm-5">
          <div
            className="card card-block card-homepage"
            onClick={this.onTermSheet}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Termsheet
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 mt-sm-5">
          <div
            className="card card-block card-homepage"
            onClick={this.onGlobalNote}
          >
            <div className="card-body">
              <div className="card-text text-center">
                Global Note
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-sm-5">
          <div className="card card-block card-homepage">
            <div className="card-body">
              <div className="card-text text-center">
                Deed of Convenant
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 mt-sm-5">
          <div className="card card-block card-homepage">
            <div className="card-body">
              <div className="card-text text-center">
                Issue Deed
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-sm-5">
          <div className="card card-block card-homepage">
            <div className="card-body">
              <div className="card-text text-center">
                Settlement Agreement
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

export default Documents;
