import React, {useState} from "react"
import {Link} from 'react-router-dom'

const ListofCleanerContacts = (props) => {

    const {registeredUser, setCurrentUser} = props

    const [search, setSearch] = useState('')

    /// This is the filter function meant to replace registereUser from map
    const filteredCleaner = registeredUser.filter(cleaner => {

        return cleaner.cleanerName.toLowerCase().includes(search.toLowerCase())
      })


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-uppercase mb-0">CleanPreneur Contact Directory</h5>
                        <input type="text" placeholder="Search For Your Favourite CleanPreneur..." class="form-control" id="search" name="search" onChange={e => setSearch(e.target.value)} style={{fontSize: "20px", width:"50%", border:"solid black", borderRadius:"10px"}}/>
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
                                <th scope="col" className="border-0 text-uppercase font-medium">Message CleanPreneur</th>
                            </tr>
                            </thead>
                            {filteredCleaner.map(cleaner => ( 
                            <tbody key={cleaner.cleanerId}>
                            <tr>
                                <td className="pl-4">{cleaner.cleanerId}</td>
                                <td>
                                    <h5 className="font-medium mb-0">{cleaner.cleanerName}</h5>
                                    
                                </td>
                                <td>
                                    <span className="text-muted "><strong>{cleaner.phone}</strong></span><br/>
                                </td>
                                <td>
                                    <span className="text-muted"><strong>{cleaner.email}</strong></span><br/>
                                </td>
                                <td>
                                    <span className="text-muted"><strong>{cleaner.address}</strong></span><br/>
                                </td>
                                <td style={{display:"flex"}}>
                                
                                <Link to={'/cleaners/chatroom'}>
                                <button className="btn btn-outline-success btn-circle btn-lg btn-circle" onClick={() => localStorage.setItem("cleanerData",cleaner.cleanerName)} style={{marginRight: "10px"}}> Message Me</button>
                                </Link>
                                
                                <Link onClick={() => setCurrentUser(cleaner)} to={`/users/cleanerProfile/${cleaner.cleanerId}`} params={ {theUser: {cleaner} }}>
                                <button className="btn btn-outline-success btn-circle btn-lg btn-circle"> Go To Profile</button>
                                </Link>
                                </td>
                            </tr>
                            </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListofCleanerContacts