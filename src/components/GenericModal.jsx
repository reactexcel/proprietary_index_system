import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class GenericModal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Modal
        show={this.props.show}
        aria-labelledby="ModalHeader"
        animation={false}
        bsClass="modal"
      >
        <Modal.Header id="ModalHeader">
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.children}</Modal.Body>
        <Modal.Footer>
          {this.props.actionButtonShow && (
            <button
              className="btn btn-primary"
              onClick={this.props.handleAction}
            >
              {this.props.actionTitle ? this.props.actionTitle : "Save"}{" "}
            </button>
          )}
          <button className="btn btn-primary" onClick={this.props.handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
