import React from "react"
import { useParams, Link } from "react-router-dom";

const CleanerProfile = (props) => {
  const { id } = useParams();
  
  console.log('props', id)
  console.log("cleaners", props) /// Passing this will search the specifi 
  const {selectedUser} = props


  const sendText = (user) => {

    console.log("THIS IS USER", user)
    fetch(`http://127.0.0.1:5000/twilio/send-text?recipient=${user}&textmessage="Congrats you got hired!" By ${localStorage.getItem("userUser")}`)
    .catch(err => console.error(err))
  }

  //console.log(selectedUser.services.map())
  return (
    <>
        <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
            <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                <img src={selectedUser.picture_url} alt="Admin" className="rounded-circle" width="150"/>
                <div className="mt-3">
                    <h4>{selectedUser.cleanerName}</h4>
                    <p className="text-muted font-size-sm">{selectedUser.address}</p>
                </div>
                </div>
            </div>
            </div>
            <div className="card mt-3">
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center flex-wrap">
                  <Link to={'/twilio/send-text'}>
                      <button className="btn btn-primary" onClick={()=> {
                      localStorage.setItem("hiredCleaner",selectedUser.cleanerName)
                      sendText(selectedUser.phone)}} style={{width:"150px", backgroundColor: "#44B244", borderColor: "black"}}>
                      <strong>Hire Me</strong>
                      </button>
                  </Link>
                </li>
                <li className="list-group-item d-flex align-items-center flex-wrap">
                  <Link to={'/cleaners/chatroom'}>
                        <button className="btn btn-outline-primary" onClick={() => localStorage.setItem("cleanerData",selectedUser.cleanerName)} style={{width:"150px", borderColor: "black"}}>
                        Message
                        </button>
                  </Link>
                </li>
                <li className="list-group-item d-flex align-items-center flex-wrap">
                  <Link to={'/users/ratings'}>
                        <button className="btn btn-outline-primary" style={{width:"150px", borderColor: "black"}}>Add comment</button>
                  </Link>
                </li>
            </ul>
            </div>
        </div>


        <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {selectedUser.cleanerName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {selectedUser.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {selectedUser.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {selectedUser.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {selectedUser.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3" style={{minWidth:"100%"}}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Description</i></h6>
                      {selectedUser.description}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-3" style={{minWidth:"100%"}}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Customer Ratings</i></h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: " 80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: " 72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: " 89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: " 55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: " 66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-3" style={{minWidth:"100%"}}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Services</i></h6>
                      {selectedUser.service.map(val => {
                                  return(
                                    <ul key={val.service}>
                                    <hr/>
                                      <li>
                                        Service:{val.service}
                                      </li>
                                      <li>
                                      Price:{val.price/100}$
                                      </li>
                                      <li>
                                      Type Of Service:{val.typeofservice}
                                      </li>
                                      <li>
                                      Deposit: {val.deposit}%
                                      </li>
                                      <hr/>
                                    </ul>
                                  )})} 
                    </div>
                  </div>
                </div>


            </div>
            </div>
            </div>

        </>
            
  )
}

export default CleanerProfile