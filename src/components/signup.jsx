import React, { Component } from "react";
import { connect } from "react-redux";
import { signupRequest } from "../redux/actions";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      error_message: ""
    };
  }
  inputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.confirm_password) {
      this.setState({ error_message: "Passwords do not match" });
    } else {
      {
        this.props.error_message
          ? this.setState({ error_message: this.props.error_message })
          : this.setState({ error_message: "" });
      }

      this.props.signupRequest(this.state);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.error_message !== "" ||
      nextProps.error_message !== this.state.error_message
    ) {
      this.setState({ error_message: nextProps.error_message });
    }
    if (nextProps.isSignupSuccess) {
      nextProps.history.push("/homepage");
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign Up</h5>
              <form className="form-signin" onSubmit={this.handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.inputChange}
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.inputChange}
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-label-group mb-0">
                  <input
                    type="password"
                    id="confirm_password"
                    className="form-control"
                    value={this.state.confirm_password}
                    onChange={this.inputChange}
                    placeholder="Confirm Password"
                    required
                  />
                  <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                <div className="text-danger mb-3 ml-4">
                  {this.state.error_message}
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to="/">Already have an Account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error_message: state.signup.message,
  isSignupSuccess: state.signup.isSuccess
});

const mapDispatchToProps = dispatch => ({
  signupRequest: signupData => dispatch(signupRequest(signupData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
