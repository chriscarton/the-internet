import { ADD_TODO, FETCH_TODOS, REMOVE_TODO } from "../actions/types";

const initialState = {
  items: [],
  newTodo: {
    name: ""
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, items: action.payload };
    case ADD_TODO:
      //I GET IT FUCK
      return { ...state, items: [...state.items, { ...action.payload }] };
    // return state;
    case REMOVE_TODO:
      console.log(action.payload);

      const filtered = state.items.filter(function (myItem) {
        if (myItem.id !== action.payload.id) {
          return true;
        }
      });

      //return state;

      return { ...state, items: filtered };

    default:
      return state;
  }
}
//A MESSY WORK ABOUT A MESSY THINK : THE INTERNET, WITHOUT MESSI BUT WITH REACT AND REDUX INTERFACED WITH A STRAPI API (external project). Trying to figure it out how Redux works.
