import React, { Component } from "react";

//Faut connecter ça au store somehow...
import { connect } from "react-redux";

import EditTodoForm from "../Todos/EditTodoForm";

class Modal extends Component {
  render() {
    //todoToEdit est vide
    //console.log(this.props);
    //console.log(this.state);

    //A la fois dans props et state...
    return (
      <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Édition todo</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <EditTodoForm todoToEdit={this.props.todoToEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoToEdit: state.todos.todoToEdit
});

//Pas d'action ?
export default connect(mapStateToProps, {})(Modal);
