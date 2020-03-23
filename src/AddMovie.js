import React, { Component } from "react";
import {connect} from "react-redux";
import {addMovie} from "./redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddMovie extends Component {

    state = {
        value: "",
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="form-group col-lg-6 col-4 mx-auto">
                <div className="input-group my-3">
            
                <input
                    className="form-control"
                    type="text"
                    value={this.state.value} 
                    onChange={this.handleChange}
                    placeholder="Movies..." 
                />

                    <div className="input-group-append">
                            <button
                            className="btn btn-sm btn-secondary"
                            type="button"
                            onClick={() => {
                                this.props.addMovie({
                                    name: this.state.value,
                                    watched: false,
                                })
                                this.setState({value: ""})
                            }}>
                        <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        </div>
                 
                </div>
          </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: movie => dispatch(addMovie(movie))
    }
}

export default connect(null, mapDispatchToProps)(AddMovie);
