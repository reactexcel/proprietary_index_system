import React, { Component } from "react";
import TrancheBlock from "./trancheBlock";

export default class RedeemNote extends Component {
  handleRedeemNote = () => {
    console.log("redeem Note");
  };
  render() {
    const list = [
      { name: "Closed-End Funds" },
      { name: "PIR Strategy" },
      { name: "Uptovalue Strategy" }
    ];
    const notesTypes = list.map((item, index) => {
      return (
        <TrancheBlock
          key={index}
          item={item}
          action="Redeem Note"
          handleAction={this.handleRedeemNote}
        />
      );
    });
    return (
      <div className="row pt-5">
        <div className="col-md-12 text-center">{notesTypes}</div>
        <div className="col-md-12 text-center mt-4">
          <button
            className="btn btn-outline-primary"
            // onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
