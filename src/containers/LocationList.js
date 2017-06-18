import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import LocationQuery from '../queries/getLocationByZipcodeQuery';

class LocationList extends Component {
    render() {
        const { loading, getWeather } = this.props.data;
        console.log(loading, getWeather);
        return (
            <table className="table table-hover mt-5">
                <thead>
                <tr>
                    <th>CITY</th>
                    <th>TEMPERATURE (°F)</th>
                    <th>TIMEZONE</th>
                    <th>ELEVATION</th>
                </tr>
                </thead>
                <tbody>
                Nothing
                </tbody>
            </table>
        )
    }

};

export default graphql(LocationQuery, {
    options: ({ zipcode }) => ({
        variables: {
            zipcode
        }
    })
})(LocationList);

