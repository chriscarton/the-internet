import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchCat } from "../../actions/catActions";

class RandomCat extends Component {
  //ça ça va être déprécié...
  componentWillMount() {
    this.props.fetchCat();
  }

  reloadCat = () => {
    //this.oneLove();
    this.props.fetchCat();
  };

  render() {
    return (
      <div id="catGenerator" className="module">
        <h1>Cat Generator</h1>
        <div className="cat">
          {this.props.cats.map(cat => (
            <img key={cat.url} src={cat.url} alt="Un chat random" />
          ))}
        </div>
        <div className="m-1">
          <button className="btn btn-primary btn-lg " onClick={this.reloadCat}>
            <i className="fa fa-refresh"></i> reload
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //voir clé dans rootReducer
  cats: state.cats.cats
});
// export default RandomCat;
export default connect(mapStateToProps, { fetchCat })(RandomCat);
