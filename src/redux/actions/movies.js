import {ADD_MOVIE, DELETE_MOVIE, SET_WATCHED} from "./actionTypes";

export const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie,
    }
}

export const deleteMovie = (movie) => {
    return {
        type: DELETE_MOVIE,
        payload: movie,
    }
}

export const setWatched = (movie) => {
    return {
        type: SET_WATCHED,
        payload: movie
    }
}

