import React, { Component } from "react";

class PastEventType extends Component {
  constructor() {
    super();
    this.state = {
      description: ""
    };
  }
  handleCancel = () => {
    this.props.history.goBack();
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  render() {
    return (
      <div className="row h-100 pt-3">
        <div className="col-md-3 font-weight-bold">Past Event Type</div>
        <div className="col-md-9 text-center h-100">
          {this.props.location.state.title} Tranche{" "}
          {this.props.location.state.tranche}
          <div className="col-md-9 p-md-0 h-50 text-center mt-4">
            <fieldset className="scheduler-border h-100">
              <legend className="scheduler-border  w-25 ">Description</legend>
              <div className="textarea">
                <textarea
                  id="description"
                  className="form-control h-100"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
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

export default PastEventType;
