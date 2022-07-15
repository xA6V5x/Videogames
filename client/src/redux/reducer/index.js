const initialState = {
    games: [],
    allGames: [],
    currentPage: 1,
    details: [],
}

// CREATE REDUCER
function rootReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {

        case "GET_VIDEOGAMES":
            return {
                ...state,
                games: payload,
                allGames: payload,
            };

        case "GET_DETAILS":
            return {
                ...state,
                details: payload,
            }
        default:
            return state;
    }

}

export default rootReducer;