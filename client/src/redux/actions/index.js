import axios from 'axios';

export const resetGames = () => {
     return {
          type: 'RESET_GAMES',
     };
};
export const getVideogames = () => {
     return async (dispatch) => {
          let json = await axios.get('/videogames');
          return dispatch({
               type: 'GET_VIDEOGAMES',
               payload: json.data,
          });
     };
     // return (dispatch) => {
     //      return axios.get('http://localhost:3001/videogames').then((json) => {
     //           return dispatch({
     //                type: 'GET_VIDEOGAMES',
     //                payload: json.data,
     //           });
     //      });
     // };
};

export const getGenres = () => {
     return async (dispatch) => {
          let json = await axios.get('/genres');
          return dispatch({
               type: 'GET_GENRES',
               payload: json.data,
          });
     };
};

export const getDetails = (id) => {
     return async (dispatch) => {
          try {
               let json = await axios.get(`/videogame/${id}`);
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
               let json = await axios.get(`/videogames?name=${name}`);
               return dispatch({
                    type: 'GET_BY_NAME',
                    payload: json.data,
               });
          } catch (error) {
               console.log(error);
          }
     };
};

export const orderByAlphabetical = (payload) => {
     return {
          type: 'ORDER_BY_ALPHABETICAL',
          payload,
     };
};

export const orderByRating = (payload) => {
     return {
          type: 'ORDER_BY_RATING',
          payload,
     };
};

export const filterByOrigin = (payload) => {
     return {
          type: 'FILTER_BY_ORIGIN',
          payload,
     };
};

export const filterByGenre = (payload) => {
     return {
          type: 'FILTER_BY_GENRE',
          payload,
     };
};

export const filterByRating = (payload) => {
     return {
          type: 'FILTER_BY_RATING',
          payload,
     };
};

export const postGame = (payload) => {
     return async () => {
          return await axios.post('/videogames', payload);
     };
};

export const setCurrentPage = (page) => {
     return {
          type: 'SET_PAGE',
          payload: parseInt(page),
     };
};
