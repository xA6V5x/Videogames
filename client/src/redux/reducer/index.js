const initialState = {
     allGames: [],
     gamesBefore: [],
     gamesAfter: [],
     gamesInRating: [],
     gamesIsEmpty: [],
     genres: [],
     details: [],
     currentPage: 1,
};

// CREATE REDUCER
function rootReducer(state = initialState, action) {
     const { type, payload } = action;

     switch (type) {
          case 'GET_VIDEOGAMES':
               if (payload.length === 0)
                    return {
                         allGames: 'Check your internet connection and try again',
                    };
               return {
                    ...state,
                    gamesBefore: payload,
                    gamesAfter: payload,
                    gamesIsEmpty: payload,
                    gamesInRating: payload,
                    allGames: payload,
               };

          case 'GET_GENRES':
               let genresOrdenados = payload.sort(function (a, b) {
                    if (a.name > b.name) {
                         return 1;
                    }
                    if (a.name < b.name) {
                         return -1;
                    }
                    return 0;
               });
               return {
                    ...state,
                    genres: genresOrdenados,
               };

          case 'GET_DETAILS':
               return {
                    ...state,
                    details: payload,
               };

          case 'GET_BY_NAME':
               if (payload.length > 0)
                    return {
                         ...state,
                         gamesBefore: payload,
                         gamesAfter: payload,
                         gamesInRating: payload,
                         gamesIsEmpty: payload,
                         allGames: payload,
                    };
               return {
                    ...state,
                    gamesIsEmpty: payload,
               };

          case 'ORDER_BY_ALPHABETICAL':
               let gamesInOrder = [];
               if (payload === 'A-Z') {
                    gamesInOrder = [...state.allGames].sort(function (a, b) {
                         if (a.name > b.name) {
                              return 1;
                         }
                         if (a.name < b.name) {
                              return -1;
                         }
                         return 0;
                    });
                    return {
                         ...state,
                         gamesBefore: gamesInOrder,
                         allGames: gamesInOrder,
                    };
               }
               if (payload === 'Z-A') {
                    gamesInOrder = [...state.allGames].sort(function (a, b) {
                         if (a.name < b.name) {
                              return 1;
                         }
                         if (a.name > b.name) {
                              return -1;
                         }
                         return 0;
                    });
                    return {
                         ...state,
                         gamesBefore: gamesInOrder,
                         allGames: gamesInOrder,
                    };
               }
               return {
                    ...state,
                    gamesBefore: state.gamesAfter,
                    allGames: state.allGames,
               };

          case 'ORDER_BY_RATING': {
               let gamesInOrder = [];
               if (payload === 'Min-Max') {
                    gamesInOrder = [...state.allGames].sort(function (a, b) {
                         if (a.rating > b.rating) {
                              return 1;
                         }
                         if (a.rating < b.rating) {
                              return -1;
                         }
                         return 0;
                    });

                    return {
                         ...state,
                         gamesBefore: gamesInOrder,
                         allGames: gamesInOrder,
                    };
               }
               if (payload === 'Max-Min') {
                    gamesInOrder = [...state.allGames].sort(function (a, b) {
                         if (a.rating < b.rating) {
                              return 1;
                         }
                         if (a.rating > b.rating) {
                              return -1;
                         }
                         return 0;
                    });
                    return {
                         ...state,
                         gamesBefore: gamesInOrder,
                         allGames: gamesInOrder,
                    };
               }
               return {
                    ...state,
                    gamesBefore: state.gamesAfter,
                    allGames: [...state.gamesAfter],
               };
          }

          case 'FILTER_BY_ORIGIN':
               let gamesOrigen = [];
               if (payload === 'created') {
                    gamesOrigen = state.gamesBefore.filter((data) => typeof data.id === 'string');
                    if (gamesOrigen.length > 0) {
                         return {
                              ...state,
                              gamesAfter: gamesOrigen,
                              gamesIsEmpty: gamesOrigen,
                              gamesInRating: gamesOrigen,
                              allGames: gamesOrigen,
                         };
                    }
                    return {
                         ...state,
                         gamesIsEmpty: 'There are no saved games',
                    };
               }
               if (payload === 'api') {
                    gamesOrigen = state.gamesBefore.filter((data) => typeof data.id === 'number');
                    return {
                         ...state,
                         gamesAfter: gamesOrigen,
                         gamesIsEmpty: gamesOrigen,
                         gamesInRating: gamesOrigen,
                         allGames: gamesOrigen,
                    };
               }
               if (payload === 'all') {
                    gamesOrigen = [...state.gamesBefore]
                         .filter((data) => typeof data.id === 'number')
                         .concat(
                              [...state.gamesBefore].filter((data) => typeof data.id === 'string')
                         );

                    return {
                         ...state,
                         gamesAfter: gamesOrigen,
                         gamesInRating: gamesOrigen,
                         gamesIsEmpty: gamesOrigen,
                         allGames: gamesOrigen,
                    };
               }

          case 'FILTER_BY_GENRE':
               if (payload === 'all') {
                    return {
                         ...state,
                         gamesBefore: state.gamesAfter,
                         gamesIsEmpty: state.gamesAfter,
                         gamesInRating: state.gamesAfter,
                         allGames: state.gamesAfter,
                    };
               }
               let gamesGenre = state.gamesAfter.filter((data) =>
                    data.genres.map((data) => data.name).includes(payload)
               );
               if (gamesGenre.length > 0)
                    return {
                         ...state,
                         gamesBefore: gamesGenre,
                         gamesIsEmpty: gamesGenre,
                         gamesInRating: gamesGenre,
                         allGames: gamesGenre,
                    };
               return {
                    ...state,
                    gamesIsEmpty: 'There are no games whit this Genre',
               };

          case 'FILTER_BY_RATING':
               let gamesRating = state.gamesInRating.filter((data) => data.rating == payload);
               if (payload === 'all') {
                    return {
                         ...state,
                         gamesIsEmpty: state.gamesInRating,
                         allGames: state.gamesInRating,
                    };
               }
               if (gamesRating.length > 0)
                    return {
                         ...state,
                         gamesIsEmpty: gamesRating,
                         allGames: gamesRating,
                    };
               return {
                    ...state,
                    gamesIsEmpty: 'There are no games whit this Rating',
               };

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
