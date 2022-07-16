const initialState = {
     games: [],
     allGames: [],
     genres: [],
     currentPage: 1,
     details: [],
};

// CREATE REDUCER
function rootReducer(state = initialState, action) {
     const { type, payload } = action;

     switch (type) {
          case 'GET_VIDEOGAMES':
               return {
                    ...state,
                    games: payload,
                    allGames: payload,
               };

          case 'GET_GENRES':
               return {
                    ...state,
                    genres: payload,
               };

          case 'GET_DETAILS':
               return {
                    ...state,
                    details: payload,
               };

          case 'GET_BY_NAME':
               return {
                    ...state,
                    allGames: payload,
               };

          case 'FILTER_BY_ORIGIN':
               let gamesOrigen = [];
               if (payload === 'created') {
                    gamesOrigen = state.games.filter((data) => typeof data.id === 'string');
                    return {
                         ...state,
                         allGames: gamesOrigen,
                    };
               }
               if (payload === 'api') {
                    gamesOrigen = state.games.filter((data) => typeof data.id === 'number');
                    return {
                         ...state,
                         allGames: gamesOrigen,
                    };
               } else {
                    return {
                         ...state,
                         allGames: state.games,
                    };
               }

          // case 'FILTER_BY_GENRE':

          case 'SET_PAGE':
               return {
                    ...state,
                    currentPage: payload,
               };

          default:
               return state;
     }
}

export default rootReducer;
