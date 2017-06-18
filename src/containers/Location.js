import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import LocationQuery from '../queries/getLocationByZipcodeQuery';
import AlertMessage from '../components/AlertMessage';
import Spinner from '../components/Loading';

class LocationList extends Component {

    renderLocationInfo(loading, locationData, error) {
        // console.log(loading, locationData, error);

        if(!loading && error) {
            return(
                <AlertMessage alertClass="danger" message={error}/>
            )
        }

        if(loading) {
            return (
                <Spinner />
            )
        }

        if(!locationData) {
            return(
                <AlertMessage alertClass="danger" message={"Please enter a valid US zip code!"}/>
            )
        }
        if(locationData) {
            return (
                <div>
                    <h2>Location Information</h2>
                    <h5>The city is: {locationData.cityName}</h5>
                    <h5>The temperature is: {locationData.temperature}</h5>
                    <h5>The timezone is: {locationData.timezoneInfo.timeZoneId} ({locationData.timezoneInfo.timeZoneId})</h5>
                    <h5>The elevation is: {locationData.elevation.toFixed(2)} meters</h5>
                </div>
            )
        }
    }
    render() {
        const {loading, getWeather } = this.props.data;
        const {error} = this.props;
        console.log(this.props);
        return (
            <div className="message-container">
                {this.renderLocationInfo(loading, getWeather, error)}
            </div>
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

