import React, { Component } from "react";
import Calendar from "react-calendar";
import ColorTitleList from "./ColorTitleList";

class CalenderPage extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentWillMount() {}
  onChange = date => this.setState({ date });
  onClickDay = date => {
    this.props.history.push({
      pathname: "/calenderinputs",
      date,
      state: this.props.location.state
    });
  };

  handleCancel = () => {
    this.props.history.goBack();
  };
  render() {
    const list = [
      { color: "#1F618D", value: "Coupons" },
      { color: "#C0392B", value: "Margin Calls" },
      { color: "#1E8449", value: "Knock outs" },
      { color: "#D4AC0D", value: "Collateral Management" },
      { color: "#CD5C5C", value: "Redemptions" },
      { color: "#48C9B0", value: "Issurance" },
      { color: "#F1948A", value: "Client Subscription" }
    ];
    return (
      <div className="row mt-2">
        <div className="col-md-7 calendar-div">
          <Calendar
            value={this.state.date}
            onChange={this.onChange}
            onClickDay={this.onClickDay}
          />
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="font-weight-bold mb-4">
            {this.props.location.state.title} Tranche{" "}
            {this.props.location.state.tranche}
          </div>
          <ColorTitleList list={list} />
        </div>
      </div>
    );
  }
}

export default CalenderPage;
