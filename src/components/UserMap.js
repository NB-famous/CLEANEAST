//Using leaflet maps by functional build


import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "../styles/MapSource.scss"
import {Icon} from 'leaflet'
import {Link} from 'react-router-dom'
//import userData from "../data/mock-users.json";
//import axios from 'axios'


/* const DEFAULT_LATITUDE = 45.476770;
const DEFUALT_LONGITUDE = -73.636540; */

const cleaner = new Icon({
    iconUrl: "/images/cleanerlogo.png",
    iconSize: [25, 25]
});

const userLocationIcon = new Icon({
    iconUrl: "/images/greenhome3.png",
    iconSize: [25, 25]
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
                    >
                    <Popup>
                        <h4>User's current position</h4>
                        <small>{currentUser.latitude}, {currentUser.longitude}</small>
                    </Popup>
                 </Marker>   
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
                    {/* <div>
                        <h2>{activeUser.cleanerName}</h2>
                        <p>{activeUser.email}</p>
                    </div> */}
                
                    <div class="col mb-3">
                        <div className="card">
                        <div className="card-body text-center">
                            <img src={activeUser.picture_url} style={{width:"100px", marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
                            <h5 className="card-title">{activeUser.cleanerName}</h5>
                            <p className="text-secondary mb-1">{activeUser.email}</p>
                            <p className="text-muted font-size-sm">{activeUser.address}</p>
                        </div>
                        <div className="card-footer" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Link onClick={() => props.setCurrentUser(activeUser)} to={`/users/cleanerProfile/${activeUser.cleanerId}`} params={ {theUser: {activeUser} }} >
                            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button">View Profile</button>
                        </Link>
                        <Link to={'/cleaners/chatroom'}>
                            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button" onClick={() => localStorage.setItem("cleanerData",activeUser.cleanerName)}>Message</button>
                        </Link>
                        </div>
                        </div>
                    </div>
                    </Popup>
                )}

            </Map>
            }
            </>
        )
}
