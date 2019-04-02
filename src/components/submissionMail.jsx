import React, { Component } from "react";
import EmailBlock from "./emailBlock";

class SubmissionMail extends Component {
  render() {
    return (
      <div className="row h-100">
        <EmailBlock
          data={this.props.location.state}
          page="submissionmail"
          history={this.props.history}
        />
      </div>
    );
  }
}

export default SubmissionMail;
