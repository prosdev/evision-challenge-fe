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
                <div className="card">
                    <h4 className="card-header">{locationData.cityName}</h4>
                    <img className="card-img-top" src="http://via.placeholder.com/350x150" alt={locationData.cityName}/>
                    <div className="card-block">
                        <p>At the location <span className="bold">{locationData.cityName}</span>,
                            the temperature is {locationData.temperature} °F,
                            the timezone is {locationData.timezoneInfo.timeZoneId},
                            and the elevation is {locationData.elevation.toFixed(2)}.
                        </p>
                    </div>
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

