import { FETCH_CAT } from "../actions/types";

const initialState = {
  cats: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CAT:
      return {
        ...state,
        cats: action.payload
      };

    default:
      return state;
  }
}
