import React, { Component } from "react";

class EmailBlock extends Component {
  constructor() {
    super();
    this.state = {
      object: "",
      to: "",
      cc: "",
      isin: "",
      text: ""
    };
  }
  componentWillMount() {
    if (this.props.data) {
      const { name: title } = this.props.data;
      let template;
      if (this.props.page === "isin") {
        template = `Dear Citi,\nCan you Please give us an ISIN for the Alfburg Note Insurance of "${title}" ?\n\nMaturity\nCurrency\nNominal Amount\nType\n\n Best Regards, \n`;
      } else if (this.props.page === "emailtodirector") {
        template = `Dear Aldo And Vittorio,\nWe are starting the process to issue a new Note via Aldburg? Please find below the characteristics of the note.\n\nMaturity\nCurrency\nNominal Amount\nType\n\n Best Regards, \n`;
      } else {
        template = `Dear Citi Team, \n\n`;
      }
      this.setState({ object: title, text: template });
    }
  }
  inputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { to, cc, text } = this.state;
    // if(to){
      window.open(`mailto:${to}?cc=${cc}&body=${text}`);
    // }
  };
  handleSave = event => {
    event.preventDefault();
  };
  handleCancel = event => {
    event.preventDefault();
    this.props.history.goBack();
  };
  render() {
    return (
      <form className="col-md-12 h-100" onSubmit={this.handleSubmit}>
        <div className="form-group row pt-5">
          <div className="col-md-2 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-75">Object</legend>
              <input
                type="text"
                id="object"
                className="form-control"
                value={this.state.object}
                readOnly
              />
            </fieldset>
          </div>
          <div className="col-md-4 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-25">To</legend>
              <input
                type="email"
                id="to"
                className="form-control"
                value={this.state.to}
                onChange={this.inputChange}
                required
                multiple={true}
              />
            </fieldset>
          </div>
          <div className="col-md-4 p-md-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border w-25">CC</legend>
              <input
                type="email"
                id="cc"
                className="form-control"
                value={this.state.cc}
                onChange={this.inputChange}
                multiple={true}
              />
            </fieldset>
          </div>
          {this.props.page === "isin" && (
            <div className="col-md-2 p-md-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">ISIN</legend>
                <input
                  type="text"
                  id="isin"
                  className="form-control"
                  value={this.state.isin}
                  onChange={this.inputChange}
                  //   readOnly
                />
              </fieldset>
            </div>
          )}
        </div>
        <div className="form-group row h-50 mb-0">
          <div className="col-md-9 p-md-0 h-100 text-center">
            <fieldset className="scheduler-border h-100">
              <legend className="scheduler-border w-25">Email Text</legend>
              <div className="textarea">
                <textarea
                  id="text"
                  className="form-control h-100"
                  value={this.state.text}
                  onChange={this.inputChange}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-9 text-center">
            {/* <a href="mailto:test@test.com?cc=test@test.com" >test</a> */}
            <button type="submit" className="btn btn-primary">
              {this.props.page === "submissionmail"
                ? "Submission"
                : "Open Email"}
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
            <div>Attachment</div>
          </div>
        </div>
      </form>
    );
  }
}

export default EmailBlock;
