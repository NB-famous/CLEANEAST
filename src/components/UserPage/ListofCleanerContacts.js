import React from "react"
import {Link} from 'react-router-dom'

const ListofCleanerContacts = (props) => {

    const {registeredUser} = props

    const sendText = (user) => {

        console.log("THIS IS USER", user)
        fetch(`http://127.0.0.1:5000/twilio/send-text?recipient=${user}&textmessage="Congrats you got hired!" By ${localStorage.getItem("userUser")}`)
        .catch(err => console.error(err))
      }

  return (
      
    <div className="container">
    
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                                <h5 className="card-title text-uppercase mb-0">CleanPreneur Contact Directory</h5>
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
                            {registeredUser.map(cleaner => ( 
                            <tbody>
                            <tr>
                                <td className="pl-4">{cleaner.cleanerId}</td>
                                <td>
                                    <h5 className="font-medium mb-0">{cleaner.cleanerName} </h5>
                                    
                                </td>
                                <td>
                                    <span className="text-muted">{cleaner.phone} </span><br/>
                                </td>
                                <td>
                                    <span className="text-muted">{cleaner.email}</span><br/>
                                </td>
                                <td>
                                    <span className="text-muted">{cleaner.address}</span><br/>
                                </td>
                                <td style={{display:"flex"}}>
                                <Link to={'/cleaners/chatroom'}>
                                <button className="btn btn-outline-success btn-circle btn-lg btn-circle" onClick={() => localStorage.setItem("cleanerData",cleaner.cleanerName)} style={{marginRight: "10px"}}> Message Me</button>
                                </Link>
                                
                                <Link to={'/twilio/send-text'}>
                                <button type="button" className="btn btn-outline-success btn-circle btn-lg btn-circle" onClick={()=> {
                                    localStorage.setItem("hiredCleaner",cleaner.cleanerName)
                                    sendText(cleaner.phone)}} >
                                    Hire Me
                                    </button>
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

export default ListofCleanerContacts