import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  logged: null,
  identifier: "",
  password: "",
  errors: [],
  jwt: "",
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: action.payload.logged,
        user: action.payload.user,
        errors: [],
        identifier: action.payload.identifier,
        jwt: action.payload.jwt
      };
    case LOGOUT:
      alert("reducer?");
      return {
        ...state,
        logged: initialState.logged,
        user: initialState.user,
        jwt: initialState.jwt,
        errors: initialState.errors
      };
    default:
      return state;
  }
}
