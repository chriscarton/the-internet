import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: null,
      identifier: "",
      password: "",
      errors: [],
      jwt: "",
      user: {}
    };
  }

  tryToLogin() {
    try {
      fetch("http://localhost:1337/auth/local", {
        method: "POST",
        body: JSON.stringify({
          identifier: this.state.identifier,
          password: this.state.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    } catch (error) {
      console.log(error);
    }
  }

  newTryToLogin() {
    (async () => {
      const rawResponse = await fetch("http://localhost:1337/auth/local", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier: this.state.identifier,
          password: this.state.password
        })
      });
      const response = await rawResponse.json();

      //Une erreur
      if (response.statusCode === 400) {
        let errors = response.message;

        let collectErrors = [];

        errors.forEach(function (message) {
          message.messages.forEach(function (obj) {
            // console.log(obj.id);
            // console.log(obj.message);
            collectErrors.push(obj);
          });
        });

        this.setState({ ...this.state, errors: collectErrors });
      } else {
        //SI C'EST OK...
        this.setState({
          ...this.state,
          logged: true,
          errors: [],
          user: response.user,
          jwt: response.jwt
        });
      }
    })();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.tryToLogin();
    this.newTryToLogin();
  };

  logout = e => {
    e.preventDefault();
    alert("logout");
  };

  loginForm() {
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
            {this.state.errors.map(error => (
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
    const logged = this.state.logged;

    return (
      <div id="Login" className="module">
        {logged ? (
          <>
            <h1>Vous êtes connecté!</h1>
            <p>Bonjour {this.state.user.username} !</p>
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
