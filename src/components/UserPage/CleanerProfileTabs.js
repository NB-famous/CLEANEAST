import React from "react"
import {Link} from 'react-router-dom'





const CleanerProfileTabs = (props) => {

  const {filteredCleaner} = props

  return (
    <>
    {filteredCleaner.map(user => (
        <div className="col-md-4" key={user.cleanerName}>
          <div className="card mb-4 shadow-sm" style={{borderRadius:"20px"}}>
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={user.picture_url} alt="building" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: Thumbnail" style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}}></img>
            <div className="card-body" style={{height: "200px", maxHeight: 200, overflow:"auto", borderTop:"solid #44B244"}}>
              <p className="card-text"><strong>Name: {user.cleanerName}</strong></p>
              <p className="card-text"><strong>Email: {user.email}</strong></p>
              <p className="card-text"><strong>Phone Number: {user.phone}</strong></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link onClick={() => props.setCurrentUser(user)} to={`/users/cleanerProfile/${user.cleanerId}`} params={ {theUser: {user} }} >
                  <button type="button" className="btn btn-sm btn-outline-success"style={{marginRight: "10px"}}>Profile</button>
                </Link>
                <Link to={'/cleaners/chatroom'}>
                  <button type="button" className="btn btn-sm btn-outline-success" onClick={() => localStorage.setItem("cleanerData",user.cleanerName)}>Message</button>
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