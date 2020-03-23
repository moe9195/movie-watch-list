import React from "react";
import {connect} from "react-redux"
import {deleteMovie, setWatched} from "./redux/actions"

const MovieRow = ({movie, deleteMovie, setWatched}) => {
    // const movie = props.movie
    return (


        <tr className="row">
            <th className="col-sm-5">
                {movie.name}
            </th>
            <th className="col-sm-3">
                <button type="button" className="btn btn-secondary btn-sm " onClick={() => setWatched(movie)} >{movie.watched ? "Unwatch" : "Watched"}</button>
            </th>
            <th className="col-sm-3">
                <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteMovie(movie)}>Delete</button>
            </th>
        </tr>
    )


}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: movie => dispatch(deleteMovie(movie)),
        setWatched: movie => dispatch(setWatched(movie))
    }
}

export default connect(null, mapDispatchToProps)(MovieRow);