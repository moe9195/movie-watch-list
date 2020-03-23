import React from 'react';
import {connect} from "react-redux";

import MovieList from "./MovieList";
import AddMovie from "./AddMovie"

const App = ({movies}) =>  {

  let watchList = movies.filter(movie => movie.watched === false)
  let watchedList = movies.filter(movie => movie.watched === true)
  
  return (  
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
          <br/><br/>
          <AddMovie />
          <br/><br/>
          </div>
        </div>

        <div className="row">
        <div className="col-sm">
            <MovieList movies={watchList} status={"Watchlist "}/>
        </div>
        <div className="col-sm">
            <MovieList movies={watchedList} status={"Watched "}/>
            </div>
            </div>
          </div>
        </div>
  );

}

const mapStateToProps = (state) => {
  return {
    movies: state.movieState.movies
  }
}

export default connect(mapStateToProps)(App);
