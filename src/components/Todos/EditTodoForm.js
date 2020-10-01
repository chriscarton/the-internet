import React, { Component } from "react";

class EditTodoForm extends Component {
  //Est-ce que ça, ça devrait être là... ?
  //Un composant fonctionnel ?
  //Un composant classe ?
  bootstrapModal = () => (
    <div className="modal" id="#exampleModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
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
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div>
        <h1>Edit todo</h1>
      </div>
    );
  }
}
export default EditTodoForm;
