import axios from 'axios';

export const getVideogames = () => {
     return async (dispatch) => {
          let json = await axios.get('http://localhost:3001/videogames');
          return dispatch({
               type: 'GET_VIDEOGAMES',
               payload: json.data,
          });
     };
};

export const getGenres = () => {
     return async (dispatch) => {
          let json = await axios.get('http://localhost:3001/genres');
          return dispatch({
               type: 'GET_GENRES',
               payload: json.data,
          });
     };
};

export const getDetails = (id) => {
     return async (dispatch) => {
          try {
               let json = await axios.get(`http://localhost:3001/videogame/${id}`);
               return dispatch({
                    type: 'GET_DETAILS',
                    payload: json.data,
               });
          } catch (error) {
               console.log(error);
          }
     };
};

export const getGameByName = (name) => {
     return async (dispatch) => {
          try {
               let json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
               return dispatch({
                    type: 'GET_BY_NAME',
                    payload: json.data,
               });
          } catch (error) {
               console.log(error);
          }
     };
};

export const filterByOrigin = (payload) => {
     return {
          type: 'FILTER_BY_ORIGIN',
          currentPage: 1,
          payload,
     };
};

// export const filterByGenre = (payload) => {
//      return async (dispatch) => {};
// };

export const setCurrentPage = (page) => {
     return {
          type: 'SET_PAGE',
          payload: parseInt(page),
     };
};
