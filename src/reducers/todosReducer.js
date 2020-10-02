import {
  ADD_TODO,
  FETCH_TODOS,
  REMOVE_TODO,
  OPEN_MODAL,
  EDIT_TODO_SUBMIT
} from "../actions/types";

const initialState = {
  items: [],
  newTodo: {
    name: ""
  },
  todoToEdit: {}
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

      return { ...state, items: filtered };

    case OPEN_MODAL:
      return { ...state, todoToEdit: action.payload };

    case EDIT_TODO_SUBMIT:
      console.log("EDIT_TODO_SUBMIT reducer");
      //For now
      return state;

    default:
      return state;
  }
}
