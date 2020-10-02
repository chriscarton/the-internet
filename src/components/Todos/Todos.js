import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTodos, removeTodo, openModal } from "../../actions/todosActions";

import AddTodoForm from "./AddTodoForm";

import PropTypes from "prop-types";

import "./Todos.scss";
import $ from "jquery";

class Todos extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  handleEdit = todoId => {
    $("#exampleModal").modal();
    this.props.openModal(todoId);
  };

  handleRemove = todoId => {
    // alert("remove " + todoId);

    const postData = { id: todoId, jwt: this.props.jwt };

    this.props.removeTodo(postData);
  };

  render() {
    let todos = this.props.todos;
    let userIsLogged = this.props.userIsLogged;
    let jwt = this.props.jwt;

    return (
      <div id="Todos" className="module">
        <h1>Todos!</h1>
        <div id="todoList">
          {todos.map(todo => (
            <div className="todo" key={todo.id}>
              <div className="todo-name">{todo.name}</div>
              {userIsLogged && (
                <div className="todo-functions">
                  <a
                    href="#Todos"
                    className="btn btn-primary btn-sm"
                    onClick={() => this.handleEdit(todo.id)}
                  >
                    <i className="fa fa-edit"></i>
                  </a>
                  <a
                    href="#Todos"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleRemove(todo.id)}
                  >
                    <i className="fa fa-remove"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>{userIsLogged && <AddTodoForm jwt={jwt} />}</div>
      </div>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  todos: state.todos.items,
  userIsLogged: state.logins.logged,
  jwt: state.logins.jwt,
  newTodo: state.todos.newTodo
});
export default connect(mapStateToProps, { fetchTodos, removeTodo, openModal })(
  Todos
);
