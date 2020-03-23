import {ADD_MOVIE, DELETE_MOVIE, SET_WATCHED} from "../actions/actionTypes";

const initialState = {
    movies: [],
}
let movies = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            movies = state.movies.concat(action.payload)
            return {
                ...state,
                movies: movies,
            }
        case DELETE_MOVIE:
            movies = state.movies.filter(movie => movie !== action.payload)
            return {
                ...state,
                movies: movies,
            }
        case SET_WATCHED:
            movies = state.movies.filter(movie => movie !== action.payload)
            let watchedMovies = movies.concat({
                name: action.payload.name,
                watched: !action.payload.watched,
            })
            return {
                ...state,
                movies: watchedMovies,
            }
        default:
            return state;
    }
}

export default reducer
