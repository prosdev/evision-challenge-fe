import React, { Component } from 'react';

import Location from './Location';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            searchTerm: '55105',
            error: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        if(this.state.term.length === 5) {
            this.setState({
                searchTerm: this.state.term,
                error: ''
            })
        } else {
            this.setState({
                error: "Please enter a valid US zip code!"
            })
        }
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a zip code for weather and location info!"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit" onClick={this.onFormSubmit}>Search</button>
                      </span>
                </div>
                <Location zipcode={this.state.searchTerm} error={this.state.error} />
            </div>
        )
    }
}

export default SearchBar;
