/// This is using leaflet creating it via class build


import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "../styles/MapSource.scss"
import {Icon} from 'leaflet'
import {geolocated} from 'react-geolocated'

const DEFAULT_LATITUDE = 45.476770;
const DEFUALT_LONGITUDE = -73.636540;

const cleaner = new Icon({
    iconUrl: "/images/cleanerlogo.png",
    iconSize: [25, 25]
});

class MapSource extends Component{

    render(){

        const latitude = this.props.coords ? this.props.coords.latitude : DEFAULT_LATITUDE;
        const longitude = this.props.coords ? this.props.coords.longitude : DEFUALT_LONGITUDE;
    
        //const position = [45.501690, -73.567253]
        const position = [latitude, longitude]
        
        return (
            <Map className="map" center={position} zoom={13}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position} icon={cleaner}>
                <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        )
    }
}

export default geolocated({
    positionOptions:{
        enableHighAccuracy: false
    },
    userDecisionTimeout: 10000
})(MapSource);