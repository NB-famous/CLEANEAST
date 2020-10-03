//Using leaflet maps by functional build


import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "../styles/MapSource.scss"
import {Icon} from 'leaflet'
//import userData from "../data/mock-users.json";
//import axios from 'axios'


/* const DEFAULT_LATITUDE = 45.476770;
const DEFUALT_LONGITUDE = -73.636540; */

const cleaner = new Icon({
    iconUrl: "/images/cleanerlogo.png",
    iconSize: [25, 25]
});

const userLocationIcon = new Icon({
    iconUrl: "/images/greenhome2.png",
    iconSize: [50, 50]
});

export default function UserMap(props){

    const {
        activeUser,
        setActiveUser,
        isLoading,
        registeredUser,
        theLoggedInUser
      } = props


      console.log("THIS IS LOGGED IN USER", theLoggedInUser)

      const getTheCurrentUser = (users) => {
        const email = localStorage.getItem("userEmail");
        return users.find(user => user.email === email)
      }
    
      const currentUser = getTheCurrentUser(theLoggedInUser)

        //const position = [45.501690, -73.567253]

        const position = currentUser && [currentUser.latitude, currentUser.longitude]
        
        return (
            <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && currentUser && <Map className="map" center={position} zoom={15}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker
                    position={[currentUser.latitude, currentUser.longitude]}
                    icon={userLocationIcon}
                    />
                {registeredUser.map(user => (
                    <Marker
                    key={user.cleanerName}
                    position={[
                        user.latitude,
                        user.longitude
                    ]}
                    onClick={() => setActiveUser(user)}

                    icon={cleaner}
                    />
                ))}
                {activeUser && (
                    <Popup
                    key={activeUser.username}
                    position={[
                        activeUser.latitude,
                        activeUser.longitude
                        
                    ]}
                    onClose={() => {
                        setActiveUser(null);
                    }}
                    >
                    <div>
                        <h2>{activeUser.username}</h2>
                        <p>{activeUser.email}</p>
                    </div>
                    </Popup>
                )}

            </Map>
            }
            </>
        )
}
