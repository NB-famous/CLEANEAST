import React from "react"
import {Link} from 'react-router-dom'


const CleanerProfileTabs = (props) => {

  const {registeredUser} = props


  return (
    
    <>
    {registeredUser.map(user => (
        <div className="col-md-4" key={user._id}>
          <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <p className="card-text"><strong>Username:{user.username}</strong></p>
              <p className="card-text"><strong>Email:{user.email}</strong></p>
              <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error corrupti officia, beatae fugit veniam sint labore sed! Inventore tempora ab quaerat praesentium voluptatibus, sint sed vitae quae. Molestias, nam.
              Architecto blanditiis enim minima. Architecto hic earum labore sit iure facere ad nemo, eaque similique neque accusamus porro quia reprehenderit voluptates maiores placeat libero perferendis vitae quas voluptas? Adipisci, dolore?
              Soluta amet eius, eveniet error quaerat, corporis voluptas illum, nobis cupiditate consequuntur fugit maiores veniam quasi. Consequuntur necessitatibus sint nisi deleniti, nostrum vel accusamus eum eaque sapiente, doloribus asperiores odio.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to={'/users/cleanerProfile'} >
                  <button type="button" className="btn btn-sm btn-outline-secondary">Profile</button>
                </Link>
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