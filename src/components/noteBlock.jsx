import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class NoteBlock extends Component {
  constructor() {
    super();
  }
  handleRightClick = (e, data) => {
    e.stopPropagation();
    const { _id, key, color } = data;
    this.props.updateNoteRequest({ _id, [key]: color });
  };
  handleClick = (item, templateColumn) => {
    const pathname = templateColumn.name
      .split(" ")
      .join("")
      .toLowerCase();
    this.props.history.push({ pathname, state: item });
  };
  // handleISINRightClick = (e, data) => {
  //   e.stopPropagation();
  //   // console.log(data);
  //   const { color: req_isin_status, _id } = data;
  //   this.props.updateNoteRequest({ _id, req_isin_status });
  //   // const requestBlock = document.getElementById(
  //   //   "request-isin-div" + data.index
  //   // );
  //   // requestBlock.style.backgroundColor = data.color;
  // };
  // handleDirectorRightClick = (e, data) => {
  //   e.stopPropagation();
  //   const { color: mail_director_status, _id } = data;
  //   this.props.updateNoteRequest({ _id, mail_director_status });
  //   // const requestBlock = document.getElementById(
  //   //   "email-to-director-div" + data.index
  //   // );
  //   // requestBlock.style.backgroundColor = data.color;
  // };
  // handleSubmissionRightClick = (e, data) => {
  //   e.stopPropagation();
  //   const { color: submission_status, _id } = data;
  //   this.props.updateNoteRequest({ _id, submission_status });
  //   // const requestBlock = document.getElementById(
  //   //   "submissions-div" + data.index
  //   // );
  //   // requestBlock.style.backgroundColor = data.color;
  // };
  render() {
    console.log(this.props);

    const {
      index,
      item,
      handleNoteClick,
      // handleRequestISINClick,
      // handleEmailToDirectorClick,
      // handleDocumentsClick,
      // handleSubmissionsClick,
      // handleCalenderClick,
      template
    } = this.props;
    // console.log(template);
    // console.log(item);

    const templateColumns = template.templateColumns.map(
      (templateColumn, i) => {
        if (templateColumn.name === "Name of Note") {
          return (
            // <div className="d-flex">
            <div
              className="p-md-1 note-title-block"
              onClick={() => handleNoteClick(item)}
              key={`${i}${index}`}
            >
              <div className="font-weight-bold">{item.name}</div>
              <div className="note-tranche">Tranche {item.trancheNo}</div>
              <div>
                <i className="material-icons">add_circle_outline</i>
              </div>
            </div>
            // </div>
          );
        } else if (templateColumn.type === "email") {
          const id =
            templateColumn.name
              .toLowerCase()
              .split(" ")
              .join("_") +
            index +
            i;
          const key =
            templateColumn.name
              .toLowerCase()
              .split(" ")
              .join("_") + "_status";
          return (
            <div
              id={id + "_div"}
              className=" p-md-1 note-title-block"
              style={{ backgroundColor: item[key] || "white" }}
              key={`${i}${index}`}
              onClick={() => this.handleClick(item, templateColumn)}
            >
              <ContextMenuTrigger id={id}>
                {templateColumn.name}
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </ContextMenuTrigger>
              <ContextMenu id={id}>
                <MenuItem
                  data={{ color: "white", index, _id: item._id, key }}
                  onClick={this.handleRightClick}
                >
                  Blank
                </MenuItem>
                <MenuItem
                  data={{ color: "#fcda60", index, _id: item._id, key }}
                  onClick={this.handleRightClick}
                >
                  Yellow
                </MenuItem>
                <MenuItem
                  data={{ color: "#ABB2C3", index, _id: item._id, key }}
                  onClick={this.handleRightClick}
                >
                  Blue
                </MenuItem>
                <MenuItem
                  data={{ color: "#00c687", index, _id: item._id, key }}
                  onClick={this.handleRightClick}
                >
                  Green
                </MenuItem>
              </ContextMenu>
            </div>
          );
        } else {
          return (
            <div
              className=" p-md-1 note-title-block"
              style={{ backgroundColor: item.req_isin_status || "white" }}
              key={`${i}${index}`}
              onClick={() => this.handleClick(item, templateColumn)}
            >
              {" "}
              {templateColumn.name}
            </div>
          );
        }
      }
    );

    return (
      <div className="col-md-12 mt-4 p-0">
        <div className="card card-block card-note">
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              {templateColumns}
              {/* <div
                className="col-md-2 p-md-1 note-title-block"
                onClick={() => handleNoteClick(item)}
              >
                <div className="font-weight-bold">{item.name}</div>
                <div className="note-tranche">Tranche {item.trancheNo}</div>
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
              <div
                className="col-md-2 p-md-1 note-isin-block"
                onClick={event => handleRequestISINClick(event, item)}
              >
                <div
                  id={"request-isin-div" + index}
                  style={{ backgroundColor: item.req_isin_status || "white" }}
                >
                  <ContextMenuTrigger id={"request-isin" + index}>
                    Request ISIN
                    <div>
                      <i className="material-icons">add_circle_outline</i>
                    </div>
                  </ContextMenuTrigger>
                </div>
                <ContextMenu id={"request-isin" + index}>
                  <MenuItem
                    data={{ color: "white", index, _id: item._id }}
                    onClick={this.handleISINRightClick}
                  >
                    Blank
                  </MenuItem>
                  <MenuItem
                    data={{
                      // color: "yellow" ,
                      color: "#fcda60",
                      index,
                      _id: item._id
                    }}
                    onClick={this.handleISINRightClick}
                  >
                    Yellow
                  </MenuItem>
                  <MenuItem
                    data={{
                      color: "#00c687", //"green"
                      index,
                      _id: item._id
                    }}
                    onClick={this.handleISINRightClick}
                  >
                    Green
                  </MenuItem>
                </ContextMenu>
              </div>
              <div
                className="col-md-2 p-md-1 note-director-block"
                onClick={event => handleEmailToDirectorClick(event, item)}
              >
                <div
                  id={"email-to-director-div" + index}
                  style={{
                    backgroundColor: item.mail_director_status || "white"
                  }}
                >
                  <ContextMenuTrigger id={"email-to-director" + index}>
                    Send Email to Directors
                    <div>
                      <i className="material-icons">add_circle_outline</i>
                    </div>
                  </ContextMenuTrigger>
                </div>
                <ContextMenu id={"email-to-director" + index}>
                  <MenuItem
                    data={{ color: "white", index, _id: item._id }}
                    onClick={this.handleDirectorRightClick}
                  >
                    Blank
                  </MenuItem>
                  <MenuItem
                    data={{ color: "#fcda60", index, _id: item._id }}
                    onClick={this.handleDirectorRightClick}
                  >
                    Yellow
                  </MenuItem>
                  <MenuItem
                    data={{ color: "#00c687", index, _id: item._id }}
                    onClick={this.handleDirectorRightClick}
                  >
                    Green
                  </MenuItem>
                </ContextMenu>
              </div>
              <div
                className="col-md-2 p-md-1 note-documents"
                onClick={() => handleDocumentsClick()}
              >
                Documents
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
              <div
                className="col-md-1 p-md-1 note-calender"
                onClick={() => handleCalenderClick(item)}
              >
                Calender
                <div>
                  <i className="material-icons">add_circle_outline</i>
                </div>
              </div>
              <div
                className="col-md-2 p-md-1 note-submisssions"
                onClick={event => handleSubmissionsClick(event)}
              >
                <div
                  id={"submissions-div" + index}
                  style={{
                    backgroundColor: item.submission_status || "white"
                  }}
                >
                  <ContextMenuTrigger id={"submissions" + index}>
                    Submissions
                    <div>
                      <i className="material-icons">add_circle_outline</i>
                    </div>
                  </ContextMenuTrigger>
                </div>
                <ContextMenu id={"submissions" + index}>
                  <MenuItem
                    data={{ color: "white", index, _id: item._id }}
                    onClick={this.handleSubmissionRightClick}
                  >
                    Blank
                  </MenuItem>
                  <MenuItem
                    data={{ color: "#fcda60", index, _id: item._id }}
                    onClick={this.handleSubmissionRightClick}
                  >
                    Yellow
                  </MenuItem>
                  <MenuItem
                    data={{ color: "#ABB2C3", index, _id: item._id }}
                    onClick={this.handleSubmissionRightClick}
                  >
                    Blue
                  </MenuItem>
                  <MenuItem
                    data={{ color: "#00c687", index, _id: item._id }}
                    onClick={this.handleSubmissionRightClick}
                  >
                    Green
                  </MenuItem>
                </ContextMenu>
              </div>
              <div className="col-md-1 p-md-1">Status</div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NoteBlock;
