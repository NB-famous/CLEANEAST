import React from "react"


const CleanerProfileTabs = (props) => {

  const {registeredUser} = props


  return (
    
    <>
    {registeredUser.map(user => (
        <div className="col-md-4" key={user._id}>
          <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <p className="card-text"><strong>{user.username}</strong></p>
              <p className="card-text"><strong>{user.email}</strong></p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Profile</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Hire</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Message</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default CleanerProfileTabs