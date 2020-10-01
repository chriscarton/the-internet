import { FETCH_TODOS, ADD_TODO, REMOVE_TODO } from "./types";

export const fetchTodos = () => dispatch => {
  fetch("http://localhost:1337/todos")
    .then(res => res.json())
    // .then(data => console.log("data:"))
    .then(data =>
      dispatch({
        type: FETCH_TODOS,
        payload: data
      })
    );
};

export const addTodo = postData => dispatch => {
  fetch("http://localhost:1337/todos", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + postData.jwt
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: ADD_TODO,
        payload: data
      })
    );
};

export const removeTodo = postData => dispatch => {
  console.log("action removeTodo fired");
  fetch("http://localhost:1337/todos/" + postData.id, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + postData.jwt
    }
    //body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: REMOVE_TODO,
        payload: data
      })
    );
};
