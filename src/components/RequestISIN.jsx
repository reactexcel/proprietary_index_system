import React, { Component } from "react";
import EmailBlock from "./emailBlock";

class RequestIsin extends Component {
  render() {
    return (
      <div className="row h-100">
        <EmailBlock
          data={this.props.location.state}
          page="isin"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default RequestIsin;
