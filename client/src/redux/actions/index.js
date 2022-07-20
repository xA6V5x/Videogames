import axios from 'axios';

export const getVideogames = () => {
     return async (dispatch) => {
          let json = await axios.get('http://localhost:3001/videogames');
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
          currentPage: 1,
          payload,
     };
};

export const filterByGenre = (payload) => {
     return {
          type: 'FILTER_BY_GENRE',
          currentPage: 1,
          payload,
     };
};

export const filterByRating = (payload) => {
     return {
          type: 'FILTER_BY_RATING',
          currentPage: 1,
          payload,
     };
};

export const postGame = (payload) => {
     return async () => {
          // const response = await axios.post('http://localhost:3001/videogames', payload);
          // return response;
          return await axios.post('http://localhost:3001/videogames', payload);
     };
};

export const setCurrentPage = (page) => {
     return {
          type: 'SET_PAGE',
          payload: parseInt(page),
     };
};
