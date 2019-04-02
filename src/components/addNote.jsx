import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addNoteRequest,
  updateNoteRequest,
  addNoteReset,
  updateNoteReset,
  deleteNoteRequest,
  deleteNoteReset,
  listTemplateRequest
} from "../redux/actions";
import { withRouter } from "react-router-dom";

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      description: "",
      status_completed: false,
      editing: false,
      template: "Aldburg",
      templateId: ""
    };
    if (!props.list.length) props.listTemplateRequest();
  }
  componentWillMount() {
    if (this.props.location.state) {
      const {
        _id,
        name,
        description,
        // template,
        templateId,
        status_completed
      } = this.props.location.state;
      this.setState({
        _id,
        name,
        description,
        // template,
        templateId,
        status_completed,
        editing: true
      });
    }
  }

  inputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const { _id, name, description, template, templateId } = this.state;
    if (this.state.editing) {
      this.props.updateNoteRequest({ _id, name, description, template });
    } else {
      this.props.addNoteRequest({ name, description, templateId });
    }
  };
  handleCancel = event => {
    event.preventDefault();
    this.props.history.goBack();
  };
  handleDelete = event => {
    event.preventDefault();
    this.props.deleteNoteRequest(this.state._id);
  };
  handleComplete = event => {
    event.preventDefault();
    this.props.history.push("/notes");
  };
  handleTemplateChange = event => {
    this.setState({ template: event.target.id });
  };
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.isAddNoteSuccess ||
      nextProps.isUpdateNoteSuccess ||
      nextProps.isDeleteNoteSuccess
    ) {
      this.props.history.push("/notes");
    }
  }
  componentWillUnmount() {
    if (
      this.state.editing &&
      (this.props.isUpdateNoteSuccess || this.props.isDeleteNoteSuccess)
    ) {
      this.props.updateNoteReset();
      this.props.deleteNoteReset();
    } else if (this.props.isAddNoteSuccess) {
      this.props.addNoteReset();
    }
  }
  render() {
    let templatesList = [];
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
      <form className="h-100-50px" onSubmit={this.handleSubmit}>
        <div className="form-group row pt-5">
          <div className="col-md-4 p-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border  w-75 ">
                Name of the Note
              </legend>
              <input
                type="text"
                id="name"
                className="form-control"
                value={this.state.name}
                onChange={this.inputChange}
                required
              />
            </fieldset>
          </div>
          <div className="col-md-4 offset-md-1 p-0 text-center">
            <fieldset className="scheduler-border">
              <legend className="scheduler-border  w-75 ">Template</legend>
              <select
                id="templateId"
                className="form-control"
                value={this.state.templateId}
                onChange={this.inputChange}
              >
                <option value="">Select Template</option>
                {templatesList}
              </select>
            </fieldset>
            {/* <legend className="scheduler-border">Template</legend> */}
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
          </div>
        </div>
        <div className="form-group row h-50 mb-0">
          <div className="col-md-9 p-0 h-100 text-center">
            <fieldset className="scheduler-border h-100">
              <legend className="scheduler-border w-50">Description</legend>
              <div className="textarea">
                <textarea
                  id="description"
                  className="form-control h-100"
                  value={this.state.description ? this.state.description : ""}
                  onChange={this.inputChange}
                />
              </div>
            </fieldset>
          </div>
        </div>
        {this.state.editing ? (
          <div className="row mt-4">
            <div className="col-md-9 text-center">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                className="btn btn-outline-primary ml-2"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger ml-2"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
            {this.state.status_completed && (
              <div className="col-md-3 text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={this.handleComplete}
                >
                  New Note Completed
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="row mt-4">
            <div className="col-md-9 text-center">
              <button type="submit" className="btn btn-primary">
                Create New Note
              </button>
              <button
                type=""
                className="btn btn-outline-primary ml-2"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
            {this.state.status_completed && (
              <div className="col-md-3 text-center">
                <button
                  className="btn btn-outline-primary btn-lg"
                  onClick={this.handleComplete}
                >
                  New Note Completed
                </button>
              </div>
            )}
          </div>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isAddNoteSuccess: state.addNote.isSuccess,
  isUpdateNoteSuccess: state.updateNote.isSuccess,
  isDeleteNoteSuccess: state.deleteNote.isSuccess,
  list: state.template.listTemplate.data
});

const mapDispatchToProps = dispatch => ({
  addNoteRequest: noteData => dispatch(addNoteRequest(noteData)),
  addNoteReset: () => dispatch(addNoteReset()),
  updateNoteRequest: noteData => dispatch(updateNoteRequest(noteData)),
  updateNoteReset: () => dispatch(updateNoteReset()),
  deleteNoteRequest: _id => dispatch(deleteNoteRequest(_id)),
  deleteNoteReset: () => dispatch(deleteNoteReset()),
  listTemplateRequest: () => dispatch(listTemplateRequest())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNote)
);
