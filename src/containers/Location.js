import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import LocationQuery from '../queries/getLocationByZipcodeQuery';
import AlertMessage from '../components/AlertMessage';
import Spinner from '../components/Loading';
import GoogleMap from '../components/GoogleMap';

/**
 * Component dealing with displaying location.
 * Wrapped with graphql to query for specific location data given zipcode.
 *
 * @param zipcode
 * @param error
 */
class Location extends Component {

    /**
     * Render location information
     *
     * @event renderLocationInfo
     * @param loading
     * @param locationData
     * @param error
     * @returns {HTML}
     */
    renderLocationInfo(loading, locationData, error) {

        //If it's not loading and there is an error (probably bad zip code), display a dangerous alert!
        if(!loading && error) {
            return(
                <AlertMessage alertClass="danger" message={error}/>
            )
        }

        //If in process of fetching data, display spinner.
        if(loading) {
            return (
                <div style={{marginLeft: 150}}>
                    <Spinner/>
                </div>
            )
        }

        //If there is no location data for the zipcode (entered five digits, but no data), prompt user to enter valid zip
        if(!locationData) {
            return(
                <AlertMessage alertClass="danger" message={"Please enter a valid US zip code!"}/>
            )
        }

        //All in all, if we get back locationData for zip code, then display the card!
        if(locationData) {
            const { cityName, temperature, elevation } = locationData;
            const { timeZoneId, timeZoneName } = locationData.timeZoneInfo;
            const { lon, lat } = locationData.coord;

            return (
                    <div className="card">
                        <h4 className="card-header">{locationData.cityName}</h4>
                        <div className="card-block row">
                            <div className="col-sm-12">
                                <p>At the location <span className="bold">{cityName}</span>,
                                    the temperature is {temperature} °F,
                                    the timezone is {timeZoneId} ({timeZoneName}),
                                    and the elevation is {elevation.toFixed(2)} meters.
                                </p>
                                <div className="col-md-12 hidden-md-down">
                                    <GoogleMap mapStyle={{width: 450, height:250}} lon={lon} lat={lat} />
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
    }

    render() {
        const {loading, getWeather } = this.props.data;
        const {error} = this.props;
        return (
            <div className="message-container">
                {this.renderLocationInfo(loading, getWeather, error)}
            </div>
        )
    }
}

Location.propTypes = {
    /** Valid US zip code (5 digits) */
    zipcode: PropTypes.number.isRequired,

    /** If error, pass it down to component */
    error: PropTypes.string
};

/**
 * Wrap the Location component with a HOC graphql to inject data into props.
 * Will return query results in this.props.data in component.
 */
export default graphql(LocationQuery, {
    options: ({ zipcode }) => ({
        variables: {
            zipcode
        }
    })
})(Location);

