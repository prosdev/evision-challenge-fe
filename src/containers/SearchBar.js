import React, { Component } from 'react';

import Location from './Location';

/**
 * Search bar.
 * Enter a valid US zip code to display location information such as weather, temperature, time zone and elevation.
 *
 */
class SearchBar extends Component {

    /**
     * Constructor for SearchBar component
     * @param props
     */
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

    /**
     * Keep track of input in SearchBar component
     * @param event
     */
    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    /**
     * Handle input submission.
     * @param event
     */
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

    /**
     * Render SearchBar component along with the location component.
     *
     * @returns {HMTL}
     */
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter a valid US zip code..."
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
