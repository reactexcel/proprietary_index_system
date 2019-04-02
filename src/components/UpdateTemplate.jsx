import React, { Component } from "react";
import DragSortableList from "react-drag-sortable";
import GenericModal from "./GenericModal";
import { connect } from "react-redux";
import isEqual from "lodash.isequal";
import {
  createTemplateRequest,
  updateTemplateRequest,
  listTemplateRequest
} from "./../redux/actions";

class UpdateTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedList: props.location.state
        ? props.location.state.templateColumns
        : [],
      show: false,
      templateName: "",
      modalFor: "",
      columnType: "",
      columnName: ""
    };
    if (!props.location.state) {
      props.listTemplateRequest();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.list.length && !isEqual(this.props.list, prevProps.list)) {
      const { list, match, history } = this.props;
      const filterData = list.filter(item => {
        return match.params.template_id === item._id;
      });
      if (filterData.length) {
        this.setState({ updatedList: filterData[0].templateColumns });
      } else {
        history.push("/templatelist");
      }
    }
  }
  handleInputChange = e => {
    this.setState({ [e.target.id]: [e.target.value] });
  };
  handleAction = () => {
    const {
      templateName: name,
      modalFor,
      updatedList,
      columnType,
      columnName
    } = this.state;
    const { match } = this.props;
    if (modalFor === "templateName") {
      if (name) {
        this.props.createTemplateRequest({ name });
        this.setState({ show: false });
      }
    } else {
      if (columnType && columnName) {
        this.props.updateTemplateRequest({
          _id: match.params.template_id,
          templateColumns: [
            ...updatedList,
            { name: columnName, type: columnType }
          ],
          add_column: true
        });
        this.setState({ show: false });
      }
    }
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  onSort = (sortedList, dropEvent) => {
    const newList = sortedList.map(item => {
      return this.state.updatedList.find(
        value =>
          value.name ===
          item.content.props.children.props.children.props.children
      );
    });
    const { match } = this.props;
    this.props.updateTemplateRequest({
      _id: match.params.template_id,
      templateColumns: newList
    });
    this.setState({ updatedList: newList });
  };
  render() {
    let list = [];
    if (this.state.updatedList.length) {
      list = this.state.updatedList.map(item => {
        return {
          content: (
            <div
              className="card card-block card-note"
              onClick={() => console.log("11111111111")}
            >
              <div className="card-body text-center">
                <div>{item.name}</div>
              </div>
            </div>
          )
        };
      });
    }
    return (
      <div className="row text-center">
        <GenericModal
          handleClose={this.handleClose}
          show={this.state.show}
          title={
            this.state.modalFor === "templateName"
              ? "Name of Template"
              : "Column Details"
          }
          actionButtonShow={true}
          handleAction={this.handleAction}
          actionTitle={
            this.state.modalFor === "templateName"
              ? "Create New Template"
              : "Add New Column"
          }
        >
          {" "}
          {this.state.modalFor === "templateName" ? (
            <input
              id="templateName"
              type="text"
              className="form-control"
              value={this.state.templateName}
              onChange={this.handleInputChange}
            />
          ) : (
            <>
              <select
                id="columnType"
                className="form-control mb-2"
                value={this.state.columnType}
                onChange={this.handleInputChange}
              >
                <option value="">Select Column Type</option>
                <option value="email">Email</option>
                <option value="document">Document</option>
                <option value="calender">Calender</option>
              </select>
              <input
                placeholder=""
                id="columnName"
                type="text"
                className="form-control"
                value={this.state.columnName}
                onChange={this.handleInputChange}
              />
            </>
          )}
        </GenericModal>
        <div className="col-md-12 mb-3">
          <DragSortableList
            items={list}
            onSort={this.onSort}
            type="horizontal"
          />
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary"
            onClick={() =>
              this.setState({ show: true, modalFor: "templateName" })
            }
          >
            New Template
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary"
            onClick={() =>
              this.setState({ show: true, modalFor: "columnType" })
            }
          >
            Create New Column
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.template.listTemplate.data
});

const mapDispatchToProps = dispatch => ({
  listTemplateRequest: () => dispatch(listTemplateRequest()),
  createTemplateRequest: data => dispatch(createTemplateRequest(data)),
  updateTemplateRequest: data => dispatch(updateTemplateRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateTemplate);
