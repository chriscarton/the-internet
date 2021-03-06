import { LOGIN, LOGOUT } from "./types";

export const login = postData => dispatch => {
  (async () => {
    const rawResponse = await fetch("http://localhost:1337/auth/local", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier: postData.identifier,
        password: postData.password
      })
    });
    const response = await rawResponse.json();

    //S'il y a une erreur
    if (response.statusCode === 400) {
      //Ce code fonctionne mais on va gérer plus tard...

      let errors = response.message;

      let collectErrors = [];

      errors.forEach(function (message) {
        message.messages.forEach(function (obj) {
          collectErrors.push(obj);
        });
      });

      // this.setState({ ...this.state, errors: collectErrors });
    } else {
      response.logged = true;
      response.identifier = postData.identifier;

      response.errors = [];

      dispatch({
        type: LOGIN,
        payload: response
      });
    }
  })();
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: {}
  });
};
