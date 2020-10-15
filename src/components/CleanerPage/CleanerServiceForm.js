import React from "react"
// import { useParams, Link } from "react-router-dom";
import RegisterService from './CleanerPage/RegisterService'

const CleanerServiceForm = (props) => {

  // const { id } = useParams();
  // const {selectedUser} = props



  return (
    
    <div>
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                <div className="mt-3">
                  <p className="text-secondary mb-1"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <RegisterService />
      </div>
    </div>
  )

}

export default CleanerServiceForm