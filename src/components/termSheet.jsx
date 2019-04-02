import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { connect } from "react-redux";

class TermSheet extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number_of_tranche: "",
      compartment: "",
      currency: "",
      nominal_amounts_notes: "",
      issue_price: "",
      common_code: "",
      isin: "",
      initial_compartment_assets: "",
      issue_terms_date: new Date(),
      issue_date: new Date(),
      issue_commencement_date: new Date(),
      maturity_date: new Date()
    };
  }
  inputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleIssueTermsDateChange = date => {
    this.setState({ issue_terms_date: date });
  };
  handleIssueDateChange = date => {
    this.setState({ issue_date: date });
  };
  handleIssueCommencementDateChange = date => {
    this.setState({ issue_commencement_date: date });
  };
  handleMaturityDateChange = date => {
    this.setState({ maturity_date: date });
  };
  handleCancel = () => {
    this.props.history.push("/documents");
  };
  render() {
    return (
      <form className="form-group row pt-5 h-100 mb-0">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Name</legend>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">
                  Issue Terms Date
                </legend>
                <DatePicker
                  className="termsheet-date"
                  value={this.state.issue_terms_date}
                  onChange={this.handleIssueTermsDateChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Compartment</legend>
                <input
                  type="text"
                  id="compartment"
                  className="form-control"
                  value={this.state.compartment}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Issue Date</legend>
                <DatePicker
                  className="termsheet-date"
                  value={this.state.issue_date}
                  onChange={this.handleIssueDateChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-100">
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
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-100">
                  Interest Commencement Date
                </legend>
                <DatePicker
                  className="termsheet-date"
                  value={this.state.issue_commencement_date}
                  onChange={this.handleIssueCommencementDateChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Currency</legend>
                <input
                  type="text"
                  id="currency"
                  className="form-control"
                  value={this.state.currency}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Maturity Date</legend>
                <DatePicker
                  className="termsheet-date"
                  value={this.state.maturity_date}
                  onChange={this.handleMaturityDateChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">
                  Nominal Amounts Notes
                </legend>
                <input
                  type="text"
                  id="nominal_amounts_notes"
                  className="form-control"
                  value={this.state.nominal_amounts_notes}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 p-lg-0 text-center">
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
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Issue Price</legend>
                <input
                  type="text"
                  id="issue_price"
                  className="form-control"
                  value={this.state.issue_price}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 p-lg-0 text-center">
              <fieldset className="scheduler-border">
                <legend className="scheduler-border w-75">Common Code</legend>
                <input
                  type="text"
                  id="common_code"
                  className="form-control"
                  value={this.state.common_code}
                  onChange={this.inputChange}
                />
              </fieldset>
            </div>
            <div className="col-lg-6 text-center">
              <i className="material-icons isin-attachment">
                insert_drive_file
              </i>
              <div>Open LaTex</div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-lg-0 text-center h-75">
          <div className="col-lg-12 h-100">
            <fieldset className="scheduler-border h-100">
              <legend className="scheduler-border w-75">
                Initial Compartment Assets
              </legend>
              <div className="textarea-1">
                <textarea
                  id="initial_compartment_assets"
                  className="form-control h-100"
                  value={this.state.initial_compartment_assets}
                  onChange={this.inputChange}
                />
              </div>
            </fieldset>
          </div>
          <div className="row mt-5">
            <div className="col-lg-9 text-center">
              <button type="submit" className="btn btn-primary">
                Generate Document
              </button>
              <button
                className="btn btn-outline-primary ml-2"
                onClick={this.handleSave}
              >
                Save
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
            <div className="col-lg-3">
              <i className="material-icons isin-attachment">
                insert_drive_file
              </i>
              <div>Termsheet</div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TermSheet);
