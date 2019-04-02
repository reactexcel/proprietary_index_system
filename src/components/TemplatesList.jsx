import React, { Component } from "react";
import { connect } from "react-redux";
import { listTemplateRequest } from "./../redux/actions";

class TemplatesList extends Component {
  constructor(props) {
    super(props);
    if (!props.list.length) props.listTemplateRequest();
  }
  handleClick = singleTemplate => {
    const { history, location } = this.props;
    // if(location.state === "new"){
      this.props.history.push({
        pathname: `/updatetemplate/${singleTemplate._id}`,
        state: singleTemplate
      });
    // } else {
    //   this.props.history.push({
    //     pathname: `/viewnotes/${singleTemplate._id}`,
    //     state: singleTemplate
    //   });
    // }
  };
  render() {
    let templatesList;
    if (this.props.list.length) {
      templatesList = this.props.list.map((item, index) => {
        return (
          <div className="col-md-4 mt-4" key={index}>
            <div
              className="card card-block card-note cursor-pointer"
              onClick={() => this.handleClick(item)}
            >
              <div className="card-body text-center">
                <div>{item.name}</div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      templatesList = "No Data Available";
    }
    return <div className="row">{templatesList}</div>;
  }
}

const mapStateToProps = state => ({
  list: state.template.listTemplate.data
});
const mapDispatchToProps = dispatch => ({
  listTemplateRequest: () => dispatch(listTemplateRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatesList);
