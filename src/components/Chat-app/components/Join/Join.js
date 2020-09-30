import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css'; 

const Join = () => {

  // const [buyer, setBuyer] = useState(''); //set to buyer
  // const [seller, setSeller] = useState(''); //set to seller
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  // SET STATE FOR buyer and seller using props
  // temporarily hardcoded
  // setBuyer('BUYER');
  // setSeller('SELLER');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
        <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )

}

export default Join; 

