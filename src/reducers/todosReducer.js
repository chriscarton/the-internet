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
      return { ...state, items: [...state.items, { ...action.payload }] };
    case REMOVE_TODO:
      const filtered = state.items.filter(function (myItem) {
        if (myItem.id !== action.payload.id) {
          return true;
        }
        return false;
      });

      return { ...state, items: filtered };

    case OPEN_MODAL:
      return { ...state, todoToEdit: action.payload };

    case EDIT_TODO_SUBMIT:
      const edited_todo = action.payload;

      const filtered2 = state.items.map(function (todo) {
        if (todo.id === edited_todo.id) {
          todo = edited_todo;
        }
        return todo;
      });

      return { ...state, items: filtered2 };

    default:
      return state;
  }
}
