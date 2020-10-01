import { FETCH_CAT } from "../actions/types";

// const initialState = {
//   // cats: {}
// };

const initialState = {
  cats: []
};

export default function (state = initialState, action) {
  //console.log(action.payload);
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
