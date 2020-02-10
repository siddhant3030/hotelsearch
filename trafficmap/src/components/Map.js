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
            }
        }
    }

    render() {
        return (
           <MapGL
           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
           {...this.state.viewport}
           onViewportChange={viewport => this.setState({ viewport })}>
                <Marker latitude={53.5225} longitude={-113.6242}>
                    <Pin />
                </Marker>
           </MapGL>
        )
    }
}
