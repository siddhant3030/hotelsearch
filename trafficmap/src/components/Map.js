import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

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
            token: "pk.eyJ1Ijoic2lkZGhhbnRzaW5naCIsImEiOiJjazA5a2N1cjUwOHp0M2lwanlrdjUxNWV1In0.UA4P2c9J71PWCoeD4Q7leA"
        }
    }

    render() {
        return (
           <ReactMapGL
           mapboxApiAccessToken={this.state.token}
           {...this.state.viewport}
           onViewportChange={(viewport) => this.setState({viewport})}
            />
        )
    }
}
