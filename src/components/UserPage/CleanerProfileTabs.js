import React from "react"
import {Link} from 'react-router-dom'





const CleanerProfileTabs = (props) => {

  const {registeredUser} = props
  
  const sendText = (user) => {

    console.log("THIS IS USER", user)
    fetch(`http://127.0.0.1:5000/twilio/send-text?recipient=${user}&textmessage="Congrats you got hired!" By ${localStorage.getItem("userUser")}`)
    .catch(err => console.error(err))
  }


  return (
    
    <>
    {registeredUser.map(user => (
        <div className="col-md-4" key={user.cleanerName}>
          <div className="card mb-4 shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={user.picture_url} alt="building" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: Thumbnail"></img>
            <div className="card-body" style={{height: "200px", maxHeight: 200, overflow:"auto"}}>
              <p className="card-text"><strong>Username:{user.cleanerName}</strong></p>
              <p className="card-text"><strong>Email:{user.email}</strong></p>
              <p className="card-text" >
                  {user.description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link onClick={() => props.setCurrentUser(user)} to={`/users/cleanerProfile/${user.cleanerId}`} params={ {theUser: {user} }} >
                  <button type="button" className="btn btn-sm btn-outline-secondary">Profile</button>
                </Link>
                <Link to={'/twilio/send-text'}>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=> {
                    localStorage.setItem("hiredCleaner",user.cleanerName)
                    sendText(user.phone)}}>
                    Hire
                    </button>
                </Link>
                <Link to={'/cleaners/chatroom'}>
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => localStorage.setItem("cleanerData",user.cleanerName)}>Message</button>
                </Link>
                </div>
              
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default CleanerProfileTabs