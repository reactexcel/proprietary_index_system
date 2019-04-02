import React, { Component } from "react";

export default class ViewNotes extends Component {
  render() {
    return (
      <div className="col-md-12 mt-4 p-0">
        <div className="card card-block card-note">
          <div className="card-body text-center">
            <div className="row">
              <div className="col-md-3 p-md-1 note-title-block">
                <div className="font-weight-bold">
                  {/* item.name */}Name of Note
                </div>
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
              <div className="col-md-3 p-md-1 note-documents">
                Documents
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
              <div className="col-md-2 p-md-1 note-calender">
                Calender
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>

              <div className="col-md-2 p-md-1">Date Issued</div>
              <div className="col-md-2 p-md-1">Amount</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
