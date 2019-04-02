import React, { Component } from "react";
import { connect } from "react-redux";
import NoteBlock from "./noteBlock";
import {
  getNotesRequest,
  updateNoteRequest,
  listTemplateRequest
} from "../redux/actions";
import { SyncLoader } from "react-spinners";
import { withRouter } from "react-router-dom";
class Notes extends Component {
  constructor(props) {
    super(props);
    if (!props.notes.length) {
      this.props.getNotesRequest();
    }
    if (!props.template_list.length) props.listTemplateRequest();
  }
  handleAddNote = () => {
    this.props.history.push("/addnote");
  };
  handleAddTranche = () => {
    this.props.history.push("/addtranche");
  };
  handleNoteClick = item => {
    this.props.history.push({ pathname: "/addnote", state: item });
  };
  handleRequestISINClick = (event, item) => {
    event.stopPropagation();
    this.props.history.push({ pathname: "/requestisin", state: item });
  };
  handleEmailToDirectorClick = (event, item) => {
    event.stopPropagation();
    this.props.history.push({ pathname: "/emailtodirector", state: item });
  };
  handleDocumentsClick = () => {
    this.props.history.push("/documents");
  };
  handleSubmissionsClick = event => {
    event.stopPropagation();
    this.props.history.push("/submissions");
  };
  handleCalenderClick = item => {
    this.props.history.push({ pathname: "/calender", state: item });
  };
  render() {
    let NotesData;
    if (this.props.notes.length && this.props.template_list.length) {
      NotesData = this.props.notes.map((item, index) => {
        const template = this.props.template_list.filter(oneTemplate => {
          return oneTemplate._id === item.templateId;
        })[0];
        // console.log(this.props.template_list, this.props.notes,  template);
        return (
          <NoteBlock
            // {...this.props}
            key={index}
            item={item}
            index={index}
            // template_list={this.props.template_list}
            template={template}
            handleNoteClick={this.handleNoteClick}
            // handleRequestISINClick={this.handleRequestISINClick}
            // handleEmailToDirectorClick={this.handleEmailToDirectorClick}
            // handleDocumentsClick={this.handleDocumentsClick}
            // handleSubmissionsClick={this.handleSubmissionsClick}
            // handleCalenderClick={this.handleCalenderClick}
            {...this.props}
          />
        );
      });
    } else {
      if (!this.props.loading_notes) {
        NotesData = (
          <div className="col-md-12 mt-4 p-0">
            <div className="card card-block card-note">
              <div className="card-body text-center">NO DATA AVAILABLE</div>
            </div>
          </div>
        );
      } else {
        NotesData = (
          <div className="text-center w-100">
            <SyncLoader />
          </div>
        );
      }
    }
    return (
      <div className="row text-center">
        {NotesData}
        <div className="col-md-12 text-center mt-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleAddNote}
          >
            Issue New Note
          </button>
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={this.handleAddTranche}
          >
            Issue New Tranche
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.data,
  loading_notes: state.notes.isLoading,
  template_list: state.template.listTemplate.data
});

const mapDispatchToProps = dispatch => ({
  getNotesRequest: () => dispatch(getNotesRequest()),
  updateNoteRequest: noteData => dispatch(updateNoteRequest(noteData)),
  listTemplateRequest: () => dispatch(listTemplateRequest())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Notes)
);
