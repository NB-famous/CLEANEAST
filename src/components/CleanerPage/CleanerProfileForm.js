import React from "react"
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import '../CleanerProfileReviews.css'
import '../CleanerProfileServices.css'


const CleanerProfileForm = (props) => {
  //const { id } = useParams();


  
  //const { selectedUser, registeredUser } = props

  const {registeredUser} = props

  // console.log("THIS IS registeredUser", registeredUser)

  const getCurrentCleaner = (theCurrentCleaner) => {

    let currentCleaner = {};

    theCurrentCleaner.map((cleaner) => {

      if (cleaner.email === localStorage.getItem("cleanerEmail")) {

        currentCleaner = { ...cleaner }

      }
      return currentCleaner
    })
    return currentCleaner;
  }

  console.log('getCurrentCleaner(registeredUser) ---> ', getCurrentCleaner(registeredUser));
  console.log('getCurrentCleaner(registeredUser).service ---> ', getCurrentCleaner(registeredUser).service);
  console.log('getCurrentCleaner(registeredUser).rating ---> ', getCurrentCleaner(registeredUser).rating);

  //Creates list of services the currently selected seller offers
  // const services = getCurrentCleaner(registeredUser).service.map(val => {
  //   return(
  //     <ul className="service-container">
  //         <li className="service-header">
  //           <div>{val.service}<span className="service-type">{val.typeofservice}</span> 
  //           </div>
  //           <div>${val.price/100}</div>  
  //         </li>
  //         <li className="service-deposit">Deposit of {val.deposit}%</li>
  //         <Link to={'/cleaners/services/update'}>
  //                           <button className="btn btn-outline-primary" onClick={() => props.updateService(getCurrentCleaner(registeredUser).cleanerId, val.service_id)}>Update service</button>
  //         </Link>
  //         {/* <DeleteServiceDirectly selectedUserIndex={registeredUser} selectedServiceid={val.service_id}> */}
  //         <button className="btn btn-outline-primary" onClick={() => props.deleteService(getCurrentCleaner(registeredUser).cleanerId, val.service_id)}>Delete service</button>
  //         {/* </DeleteServiceDirectly> */}
  //     </ul>
  //   )})  

  //Creates list of reviews belonging to the currently selected seller
  const reviews = getCurrentCleaner(registeredUser).rating.map(val => {

    const starRating = [...Array(5)].map((star, i) => {
      return (
        <FaStar className="star" color={i <= val.rating - 1 ? "#ffc107" : "e4e5e9"} />
      )
    });

    return (
      <ul className="review-container">
        <li className="review-header">
          <div>{val.username}</div>
          <div>{starRating}</div>
        </li>
        <li className="review-servicename">{val.service}</li>
        <li className="review-comment">{val.comment}</li>

      </ul>)
  });



  const { description, email, phone, cleanerName, address, picture_url } = getCurrentCleaner(registeredUser);

  return (

    <>
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src={picture_url} alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                  <h4 style={{color: "black"}}>{localStorage.getItem("cleanerUser")}</h4>
                  <p className="text-secondary mb-1">{cleanerName}</p>
                  <p className="text-muted font-size-sm">{address}</p>
                  {/* <button className="btn btn-primary">Hire</button> */}
                  {/* <button className="btn btn-outline-primary">Message</button> */}
                  <Link to={'/cleaners/services'}>
                    <button className="btn btn-outline-primary" onClick={() => props.createService(getCurrentCleaner(registeredUser).cleanerId)}>Add service</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0" style={{color: "black"}}>Full Name:</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <strong>{cleanerName}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0" style={{color: "black"}}>Email:</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <strong>{email}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0" style={{color: "black"}}>Phone #:</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <strong>{phone}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0" style={{color: "black"}}>Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <strong>{address}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutters-sm">

            <div className="col-sm-6 mb-3" style={{ minWidth: "100%" }}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Description</i></h6>
                  <p style={{color: "black"}}>{description} </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3" style={{ minWidth: "100%" }}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Services</i></h6>
                  {getCurrentCleaner(registeredUser).service.map(val => {
                    return (
                      <ul key={val.service_id} className="service-container">
                        <li className="service-header">
                          <div>{val.service}<span className="service-type">{val.typeofservice}</span>
                          </div>
                          <div>${val.price / 100}</div>
                        </li>
                        <li className="service-deposit">Deposit of {val.deposit}%</li>
                        <Link to={'/cleaners/services/update'}>
                          <button className="btn btn-outline-primary" onClick={() => props.updateService(getCurrentCleaner(registeredUser).cleanerId, val.service_id)}>Update service</button>
                        </Link>
                        {/* <DeleteServiceDirectly selectedUserIndex={registeredUser} selectedServiceid={val.service_id}> */}
                        <button className="btn btn-outline-primary" onClick={() => props.deleteService(getCurrentCleaner(registeredUser).cleanerId, val.service_id)}>Delete service</button>
                        {/* </DeleteServiceDirectly> */}
                      </ul>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="col-sm-6 mb-3" style={{ minWidth: "100%" }}>
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Reviews</i></h6>
                  {reviews}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>


  )
}

export default CleanerProfileForm