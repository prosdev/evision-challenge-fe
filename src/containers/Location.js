import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import LocationQuery from '../queries/getLocationByZipcodeQuery';
import AlertMessage from '../components/AlertMessage';
import Spinner from '../components/Loading';
import GoogleMap from '../components/GoogleMap';

class LocationList extends Component {

    renderLocationInfo(loading, locationData, error) {
        if(!loading && error) {
            return(
                <AlertMessage alertClass="danger" message={error}/>
            )
        }

        if(loading) {
            return (
                <div style={{marginLeft: 150}}>
                    <Spinner/>
                </div>
            )
        }

        if(!locationData) {
            return(
                <AlertMessage alertClass="danger" message={"Please enter a valid US zip code!"}/>
            )
        }
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

};

export default graphql(LocationQuery, {
    options: ({ zipcode }) => ({
        variables: {
            zipcode
        }
    })
})(LocationList);

