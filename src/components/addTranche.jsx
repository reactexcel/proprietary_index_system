import React, { Component } from "react";
import TrancheBlock from "./trancheBlock";
import { connect } from "react-redux";
import {
  addTrancheRequest,
  addTrancheReset,
  getNotesRequest,
  listTemplateRequest
} from "../redux/actions";
import { SyncLoader } from "react-spinners";

class AddTranche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templateId: ""
    };
    if (!props.notes.length) {
      props.getNotesRequest();
    }
    if (!props.list.length) props.listTemplateRequest();
  }
  handleAddTranche = item => {
    const { templateId } = this.state;
    const { _id, name } = item;
    if (templateId)
      this.props.addTrancheRequest({ noteId: _id, name, templateId });
  };
  handleCancel = () => {
    this.props.history.goBack();
  };
  handleTemplateChange = event => {
    this.setState({ templateId: event.target.value });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAddTrancheSuccess) {
      this.props.history.push("/notes");
    }
  }
  componentWillUnmount() {
    if (this.props.isAddTrancheSuccess) {
      this.props.addTrancheReset();
    }
  }
  render() {
    let notesTypes;
    if (this.props.notes.length) {
      notesTypes = this.props.notes.map((item, index) => {
        if (item.trancheNo === 1) {
          return (
            <TrancheBlock
              key={index}
              item={item}
              action="Create New Tranche"
              handleAction={this.handleAddTranche}
            />
          );
        }
      });
    } else {
      if (!this.props.loading_notes) {
        notesTypes = <div>NO DATA AVAILABLE</div>;
      } else {
        notesTypes = (
          <div className="text-center w-100">
            <SyncLoader />
          </div>
        );
      }
    }
    let templatesList;
    if (this.props.list.length) {
      templatesList = this.props.list.map((item, index) => {
        return (
          <option key={index} value={item._id}>
            {item.name}
          </option>
        );
      });
    }
    return (
      <div className="row pt-5">
        <div className="col-md-12 text-center">
          <legend className="scheduler-border">Template</legend>
          {/* <div
            className="btn-group btn-group-toggle ml-2"
            data-toggle="buttons"
          >
            <label
              className={
                (this.state.template == "Aldburg" ? "active" : "") +
                " btn btn-secondary "
              }
              id="Aldburg"
              onClick={this.handleTemplateChange}
            >
              <input
                type="radio"
                name="options"
                id="Aldburg"
                autoComplete="off"
                checked={this.state.template == "Aldburg"}
                readOnly
              />{" "}
              Aldburg
            </label>
            <label
              className={
                "btn btn-secondary " +
                (this.state.template == "SmartETN" ? "active" : "")
              }
              id="SmartETN"
              onClick={this.handleTemplateChange}
            >
              <input
                type="radio"
                name="options"
                id="SmartETN"
                autoComplete="off"
                checked={this.state.template == "SmartETN"}
                readOnly
              />{" "}
              SmartETN
            </label>
          </div> */}
          <select
            className="form-control w-25 mx-auto"
            value={this.state.templateId}
            onChange={this.handleTemplateChange}
          >
            <option value="">Select Template</option>
            {templatesList}
          </select>
        </div>
        {notesTypes}
        <div className="col-md-12 text-center mt-4">
          <button
            className="btn btn-outline-primary"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.data,
  isAddTrancheSuccess: state.addTranche.isSuccess,
  loading_notes: state.notes.isLoading,
  list: state.template.listTemplate.data
});

const mapDispatchToProps = dispatch => ({
  addTrancheRequest: trancheData => dispatch(addTrancheRequest(trancheData)),
  addTrancheReset: () => dispatch(addTrancheReset()),
  listTemplateRequest: () => dispatch(listTemplateRequest()),
  getNotesRequest: () => dispatch(getNotesRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTranche);
