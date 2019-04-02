import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../redux/actions";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  inputChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginRequest(this.state);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoginSuccess) {
      nextProps.history.push("/homepage");
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
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
                <div className="form-label-group mb-0">
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
                <div className="text-danger mb-3 ml-4">
                  {this.props.error_message}
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
              <div className="text-center mt-4">
                <Link to="/signup">Create an Account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error_message: state.login.message,
  isLoginSuccess: state.login.isSuccess
});

const mapDispatchToProps = dispatch => ({
  loginRequest: loginData => dispatch(loginRequest(loginData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
