import React, { Component } from "react";

import { connect } from "react-redux";
import { editTodoSubmit } from "../../actions/todosActions";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "qdfd" };
  }

  componentWillMount() {
    //Se lance au début de l'application
    //No matter what
    //Pas quand le composant apparaît visuellement
  }

  componentWillReceiveProps(props) {
    this.setState(props.todoToEdit);
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    editTodoSubmit();
    //trigger action
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Chose à faire"
              onChange={() => this.handleChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="form-group text-center">
            <input type="submit" className="btn btn-primary" value={"Éditer"} />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //voir clé dans rootReducer
  todos: state.todos.items,
  userIsLogged: state.logins.logged,
  jwt: state.logins.jwt,
  newTodo: state.todos.newTodo,
  todoToEdit: state.todos.todoToEdit
});

//De toute façon il va me falloir une action
//A mettre ci-dessous

//export default EditTodoForm;
export default connect(mapStateToProps, { editTodoSubmit })(EditTodoForm);
