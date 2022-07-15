import axios from "axios";

export function getVideogames() {
    return async function (dispatch) {
      var json = await axios.get("http://localhost:3001/videogames");
      return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data,
      });
    };
  }

  export const getDetails = (id) => {
    return async function (dispatch) {
      try {
        var json = await axios.get(`http://localhost:3001/videogame/${id}`);
        return dispatch({
          type: "GET_DETAILS",
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }