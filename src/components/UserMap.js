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

export default function UserMap(props){

    const {
        activeUser,
        setActiveUser,
        isLoading,
        registeredUser,
      } = props

    /* const [activeUser, setActiveUser] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const [registeredUser, setRegisteredUser] = useState([])


    useEffect(()=>{
       axios({
           method: 'GET',
           url:'http://localhost:5000/cleaners'})
        .then(res => {
            setRegisteredUser(res.data)
            setLoading(false)
            console.log("this is response", res)
        })
        .catch(err => console.log(err))
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
      } */

      if (isLoading) {
        return <div>Loading...</div>;
      }


    
        const position = [45.501690, -73.567253]
        //const position = [latitude, longitude]
        
        return (
            <Map className="map" center={position} zoom={13}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {registeredUser.map(user => (
                    <Marker
                    key={user.username}
                    position={[
                        user.latitude,
                        user.longitude
                        // Number(user.location.split(', ')[0]),
                        // Number(user.location.split(', ')[1])
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
                        // Number(activeUser.location.split(', ')[0]),
                        // Number(activeUser.location.split(', ')[1])
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
        )
}
