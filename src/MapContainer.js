import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapData from './mapData.json';

export default class MapContainer extends Component {

    /*
    / Import and Add Data to State.
    */
    state = {
        locations: mapData
    }


    componentDidMount() {
        this.displayMap ();
    }

    displayMap () {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            const mapConfig = Object.assign({}, {
                center: { lat: -33.9328, lng: 18.417189 },
                zoom: 11,
                mapTypeId: 'roadmap'
            })

            this.map = new maps.Map(node, mapConfig);

            /*
            / Add the markers to map
            */
            this.state.locations.forEach(location => {
                const marker = new google.maps.Marker({
                    position: { lat: location.Lat, lng: location.Long },
                    map: this.map,
                    title: location.Firstname + location.Surname
                });

                /*
                / Add event listener and then remove a Marker on click.
                */

                marker.addListener('click', function() {
                    marker.setMap(null);
                });
            })


        }
    }

    render() {
        const style = {
            width: '80vw',
            height: '80vh'
        }

        return (
            <div ref="map" style={style}>
            loading the map...
            </div>

        )
    }
}