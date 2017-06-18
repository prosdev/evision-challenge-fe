import React, { Component } from 'react';

import LocationList from './LocationList';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term : '55105'}

    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a zip code for weather and location info!" />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Search</button>
                      </span>
                </div>
                <LocationList zipcode={this.state.term} />
            </div>
        )
    }
}

export default SearchBar;
