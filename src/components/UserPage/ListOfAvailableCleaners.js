import React from "react"
import {Link} from 'react-router-dom'

const ListOfAvailableCleaners = (props) => {

    const {registeredUser, setCurrentUser} = props

  return (
      
    <div className="container">
    
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                                <h5 className="card-title text-uppercase mb-0">List Of Available CleanerPreneurs</h5>
                    </div>
                    
                    <div className="table-responsive">
                        <table className="table no-wrap user-table mb-0">
                            <thead>
                            <tr>
                                <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                                <th scope="col" className="border-0 text-uppercase font-medium">Name</th>
                                <th scope="col" className="border-0 text-uppercase font-medium">Phone</th>
                                <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                                <th scope="col" className="border-0 text-uppercase font-medium">Address</th>
                                <th scope="col" className="border-0 text-uppercase font-medium">View Profile</th>
                            </tr>
                            </thead>
                            {registeredUser.map(cleaner => ( 
                            <tbody>
                            <tr>
                                <td className="pl-4">{cleaner.cleanerId}</td>
                                <td>
                                    <h5 className="font-medium mb-0">{cleaner.cleanerName} </h5>
                                    
                                </td>
                                <td>
                                    <span className="text-muted"><strong>cleaner.phone}</strong></span><br/>
                                </td>
                                <td>
                                    <span className="text-muted"><strong>{cleaner.email}</strong></span><br/>
                                </td>
                                <td>
                                    <span className="text-muted"><strong>{cleaner.address}</strong></span><br/>
                                </td>
                                <td>
                                <Link onClick={() => setCurrentUser(cleaner)} to={`/users/cleanerProfile/${cleaner.cleanerId}`} params={ {theUser: {cleaner} }}>
                                <button className="btn btn-outline-success btn-circle btn-lg btn-circle"> Go To Profile</button>
                                </Link>
                                </td>
                            </tr>
                            </tbody>
                            ))}     {/* end of map */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ListOfAvailableCleaners