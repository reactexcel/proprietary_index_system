import React, { Component } from "react";
import { getNotesRequest } from "../redux/actions";
import { connect } from "react-redux";

class HomePage extends Component {
  onBackendAccess = () => {
    this.props.history.push("/backend");
  };
  onAddNote = () => {
    this.props.history.push("/notes");
  };
  onAddTranche = () => {
    this.props.history.push("/addtranche");
  };
  onViewNotes = () => {
    this.props.history.push("/notes");
  };
  onRedeemNotes = () => {
    this.props.history.push("/templatelist");
  };
  componentWillMount() {
    if (!this.props.notes.length) {
      this.props.getNotesRequest();
    }
  }
  render() {
    return (
      <div className="h-100">
        <div className="row h-25">
          <div className="offset-md-9 col-md-3 pr-md-0 my-auto">
            <div
              className="card card-block card-homepage"
              onClick={this.onBackendAccess}
            >
              <div className="card-body">
                <div className="card-text text-center">
                  Access to Back-End
                  <div>
                    <i className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row h-75">
          <div className="col-md-3 mt-5 pl-md-0">
            <div
              className="card card-block card-homepage"
              onClick={this.onAddNote}
            >
              <div className="card-body">
                <div className="card-text text-center">
                  Create New Note
                  <div>
                    <i className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              className="card card-block card-homepage"
              onClick={this.onAddTranche}
            >
              <div className="card-body">
                <div className="card-text text-center">
                  Issue New Tranche
                  <div>
                    <i className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div
              className="card card-block card-homepage"
              onClick={this.onViewNotes}
            >
              <div className="card-body">
                <div className="card-text text-center">
                  View Notes
                  <div>
                    <i className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5 pr-md-0">
            <div
              className="card card-block card-homepage"
              onClick={this.onRedeemNotes}
            >
              <div className="card-body">
                <div className="card-text text-center">
                  Redeem Existing Notes
                  <div>
                    <i className="material-icons">add_circle_outline</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes.data
});

const mapDispatchToProps = dispatch => ({
  getNotesRequest: () => dispatch(getNotesRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
