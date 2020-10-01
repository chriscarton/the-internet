import { FETCH_CAT } from "./types";

export const fetchCat = () => dispatch => {
  //   alert("fetchCat action");
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    //   .then(data => this.setState({ cats: data }));
    // .then(data => console.log(data))
    .then(data =>
      dispatch({
        type: FETCH_CAT,
        payload: data
      })
    );
};
