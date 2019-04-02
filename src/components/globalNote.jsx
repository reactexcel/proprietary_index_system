import React, { Component } from "react";

class GlobalNote extends Component {
  constructor() {
    super();
    this.state = {
      series: "",
      isin: "",
      number_of_tranche: ""
    };
  }
  handleCancel = () => {
    this.props.history.push("/documents");
  };
  render() {
    return (
      <form className="form-group pt-5 h-100">
        <div className="row">
          <div className="col-md-3 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-75">Series</legend>
              <input
                type="text"
                id="series"
                className="form-control"
                value={this.state.series}
                onChange={this.inputChange}
              />
            </fieldset>
          </div>
          <div className="col-md-3 offset-md-1 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-75">ISIN</legend>
              <input
                type="text"
                id="isin"
                className="form-control"
                value={this.state.isin}
                onChange={this.inputChange}
              />
            </fieldset>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-3 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-75">
                Number of Tranche
              </legend>
              <input
                type="text"
                id="number_of_tranche"
                className="form-control"
                value={this.state.number_of_tranche}
                onChange={this.inputChange}
              />
            </fieldset>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-9 text-center">
            <button type="submit" className="btn btn-primary">
              Generate Document
            </button>
            <button
              className="btn btn-outline-primary ml-2"
              onClick={this.handleSave}
            >
              Save
            </button>
            <button className="btn btn-danger ml-2" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
          <div className="col-md-3">
            <i className="material-icons isin-attachment">insert_drive_file</i>
            <div>Termsheet</div>
          </div>
        </div>
      </form>
    );
  }
}

export default GlobalNote;
