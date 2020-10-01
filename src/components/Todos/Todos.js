import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchTodos, removeTodo } from "../../actions/todosActions";

import TodoForm from "./TodoForm";

import PropTypes from "prop-types";

import "./Todos.scss";

class Todos extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

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
                    onClick={this.handleEdit}
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
        {/* 
        
        PLUS BESOIN DE ÇA POUR L'INSTANT
        
        <div id="userIsLogged">
          {userIsLogged ? (
            <h1 className="logged">User is logged!</h1>
          ) : (
            <h1 className="not-logged">Not logged</h1>
          )}
          {jwt}
        </div> 
        
        */}

        <div>{userIsLogged && <TodoForm jwt={jwt} />}</div>
      </div>
    );
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  //voir clé dans rootReducer
  todos: state.todos.items,
  //Là je vais essayer de faire passer une propriété d'un autre state (Login)
  //AND IT DID WORK !
  userIsLogged: state.logins.logged,
  jwt: state.logins.jwt,
  newTodo: state.todos.newTodo
});
// export default Todos;
export default connect(mapStateToProps, { fetchTodos, removeTodo })(Todos);
