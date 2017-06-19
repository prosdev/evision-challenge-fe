import React, {Component} from 'react';
import config from '../config/config';
import GoogleMapsLoader from 'google-maps';
import PropTypes from 'prop-types';

/**
 * Smart component to display a piece of google map given width, height, lon and lat.
 * You may have to sign up for an GOOGLE MAP API Key for this one.
 *
 * @param lat
 * @param lon
 * @param mapStyle
 */
class GoogleMap extends Component {
    /**
     * Fetches appropriate google map data on componentDidMount
     *
     * @event componentDidMount
     * @return {undefined}
     */
    componentDidMount() {
        GoogleMapsLoader.KEY = config.GOOGLEMAP_API;

        /**
         * Load google map, and draw a map
         *
         * @event GoogleMapsLoader.load()
         */
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

    /**
     * Will reload google map on props change (when clicking search for a different zip code).
     * @param nextProps
     */
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

    /**
     * Render google map
     *
     * @returns {HTML}
     */
    render() {
        return (
            <div
                ref="map"
                 style={this.props.mapStyle}
            />
        )
    }
}

GoogleMap.propTypes = {
    /** The latitude of a location. Expecting a float */
    lat: PropTypes.number.isRequired,

    /** The longitude of a location. Expecting a float */
    lng: PropTypes.number.isRequired,

    /** Will have to pass in a width and height to display map. Otherwise, overflow--> hidden */
    mapStyle: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    })
};

export default GoogleMap;