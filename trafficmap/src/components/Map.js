import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Pin from './Pin';

export default class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            viewport: {
                width: 1000,
                height: 800,
                zoom: 8,
                latitude: 53.5444,
                longitude: -113.4909
            },
            coords: [
                { latitude: 51.5454, longitude: -113.3434 },
                { latitude: 52.5454, longitude: -113.4947 },
                { latitude: 53.5454, longitude: -113.3941 },
                { latitude: 54.5454, longitude: -113.4994 },
                { latitude: 55.5454, longitude: -113.3234 },
                { latitude: 56.5454, longitude: -113.3455 },
                { latitude: 57.5454, longitude: -113.3460 }
            ]
        }
    }

    render() {
        const { coords } = this.state;
        return (
           <MapGL
           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
           {...this.state.viewport}
           onViewportChange={viewport => this.setState({ viewport })}>
               { coords.map(coord => (
                <Marker>
                    <Pin />
                </Marker>
               )) }
              
           </MapGL>
        )
    }
}
