import React, {Component} from 'react';
import config from '../config/config';
import GoogleMapsLoader from 'google-maps';

class GoogleMap extends Component {
    /**
     * Fetches appropriate google map data on componentDidMount
     *
     * @event componentDidMount
     * @return {undefined}
     */
    componentDidMount() {
        GoogleMapsLoader.KEY = config.GOOGLEMAP_API;
        GoogleMapsLoader.load((google) => {
            new google.maps.Map(this.refs.map, {
                zoom: 9,
                center : {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            })
        });

        GoogleMapsLoader.onLoad(function(google) {
            console.log('I just loaded google maps api');
        });
    }

    componentWillReceiveProps(nextProps) {
        GoogleMapsLoader.load((google) => {
            new google.maps.Map(this.refs.map, {
                zoom: 9,
                center : {
                    lat: nextProps.lat,
                    lng: nextProps.lon
                }
            })
        });
    }

    render() {

        return (
            <div
                ref="map"
                 style={this.props.mapStyle}
            />
        )
    }
}

export default GoogleMap;