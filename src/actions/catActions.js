import { FETCH_CAT } from "./types";

export const fetchCat = () => dispatch => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CAT,
        payload: data
      })
    );
};
