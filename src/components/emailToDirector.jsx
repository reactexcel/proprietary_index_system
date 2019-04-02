import React, { Component } from "react";
import EmailBlock from "./emailBlock";

class EmailToDirector extends Component {
  render() {
    return (
      <div className="row h-100">
        <EmailBlock
          data={this.props.location.state}
          page="emailtodirector"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default EmailToDirector;
