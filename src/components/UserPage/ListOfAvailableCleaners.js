import React from "react"
import {Link} from 'react-router-dom'

const ListOfAvailableCleaners = (props) => {

    const {registeredUser, setCurrentUser} = props

  return (
      
    <div class="container">
    
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                                <h5 class="card-title text-uppercase mb-0">List Of Available CleanerPreneurs</h5>
                    </div>
                    
                    <div class="table-responsive">
                        <table class="table no-wrap user-table mb-0">
                            <thead>
                            <tr>
                                <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                                <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                                <th scope="col" class="border-0 text-uppercase font-medium">Phone</th>
                                <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                                <th scope="col" class="border-0 text-uppercase font-medium">Address</th>
                                <th scope="col" class="border-0 text-uppercase font-medium">View Profile</th>
                            </tr>
                            </thead>
                            {registeredUser.map(cleaner => ( 
                            <tbody>
                            <tr>
                                <td class="pl-4">{cleaner.cleanerId}</td>
                                <td>
                                    <h5 class="font-medium mb-0">{cleaner.cleanerName} </h5>
                                    
                                </td>
                                <td>
                                    <span class="text-muted">{cleaner.phone} </span><br/>
                                </td>
                                <td>
                                    <span class="text-muted">{cleaner.email}</span><br/>
                                </td>
                                <td>
                                    <span class="text-muted">{cleaner.address}</span><br/>
                                </td>
                                <td>
                                <Link onClick={() => setCurrentUser(cleaner)} to={`/users/cleanerProfile/${cleaner.cleanerId}`} params={ {theUser: {cleaner} }}>
                                <button> Go To Profile</button>
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