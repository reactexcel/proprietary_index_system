import React, { Component } from "react";

class AlertType extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className="row h-100 pt-3">
        <div className="col-md-3 font-weight-bold">Alert Type</div>
        <div className="col-md-9 text-center h-100">
          {this.props.location.state.title} Tranche{" "}
          {this.props.location.state.tranche}
          <div className="col-md-9 p-md-0 h-50 text-center mt-4">
            <fieldset className="scheduler-border h-100">
              <legend className="scheduler-border  w-25 ">Email Text</legend>
              <div className="textarea">
                <textarea
                  id="text"
                  className="form-control h-100"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
              </div>
            </fieldset>
          </div>
          <div className="col-md-9 text-center mt-4">
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Save
            </button>
            <button
              className="btn btn-outline-primary ml-2"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertType;
