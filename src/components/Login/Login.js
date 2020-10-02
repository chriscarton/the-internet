import React, { Component } from "react";

import { connect } from "react-redux";
import { login, logout } from "../../actions/loginActions";

class Login extends Component {
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.tryToLogin();

    const postData = {
      identifier: this.state.identifier,
      password: this.state.password
    };

    this.props.login(postData);
  };

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  loginForm() {
    const errors = this.props.logins.errors;
    return (
      <>
        <h1>Se connecter</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="identifier"
              className="form-control"
              placeholder="Identifiant"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Mot de passe"
              onChange={this.onChange}
            />
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-primary"
              value="Se connecter"
            />
          </div>
          <div className="errors">
            {errors.map(error => (
              <div key={error.id} className="error">
                <i className="fa fa-warning"></i>
                {" " + error.message}
              </div>
            ))}
          </div>
        </form>
      </>
    );
  }

  render() {
    const logged = this.props.logins.logged;
    const username = this.props.logins.user.username;

    return (
      <div id="Login" className="module">
        {logged ? (
          <>
            <h1>Vous êtes connecté!</h1>
            <p>Bonjour {username} !</p>
            <div className="text-center">
              <a
                href="#Login"
                className="btn btn-danger btn-sm"
                onClick={this.logout}
              >
                <i className="fa fa-power-off"></i> Se déconnecter
              </a>
            </div>
          </>
        ) : (
          this.loginForm()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //voir clé dans rootReducer
  logins: {
    logged: state.logins.logged,
    identifier: state.logins.identifier,
    password: state.logins.password,
    errors: state.logins.errors,
    jwt: state.logins.jwt,
    user: state.logins.user
  }
});

export default connect(mapStateToProps, { login, logout })(Login);
