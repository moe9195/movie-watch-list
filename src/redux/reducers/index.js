import movieReducer from "./movies"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    movieState: movieReducer
})

export default rootReducer;