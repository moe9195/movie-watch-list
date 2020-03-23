import React, { Component } from "react";

import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";

class MovieList extends Component {
    state = {
        query: "",
    }

    setQuery = (query) => this.setState({query})
    
    filterMovies = () => {
        const query = this.state.query.toLowerCase();
        return this.props.movies.filter(movie => {
            return movie.name.toLowerCase().includes(query)
        })
    }

    getFilteredLength = () => {
        return this.filterMovies().length
    }

    render() {
 
        const movieRow = this.filterMovies().map(movie => (
            <MovieRow
                movie={movie}
                watched={this.props.watched}
            />
        ))

        const showCounter =  <span className="badge badge-pill badge-secondary"> 
                            {this.props.movies.length === this.getFilteredLength() ? this.props.movies.length: this.getFilteredLength() + " of " + this.props.movies.length}
        </span>
        
        return (
            <div className="movies">
                &nbsp; {this.props.status}{showCounter}
                <div className="card">
                <SearchBar onChange={this.setQuery} />

                <div className="container-fluid">
                    <table className="table">
                        <tbody>
                            {movieRow}
                        </tbody>
                    </table>
               
            </div>
            </div>
        </div>

        )
    }
}

export default MovieList;