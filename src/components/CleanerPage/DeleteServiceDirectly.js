import React from "react";
// import "../styles/ButtonList.scss";
// import { Link } from "react-router-dom";


export default function DeleteServiceDirectly(props) {
    
  const selectedUserIndex = props.selectedUserIndex
  console.log("selectedUserIndex ", selectedUserIndex )
  const selectedServiceid = props.selectedServiceid
  console.log("selectedServiceid ", selectedServiceid )

  // axios.post('http://localhost:5000/cleaners/service/delete', service, {
  //           headers: {
  //             'Content-Type': 'application/json', 
  //             'cleanerttoken': localStorage.getItem('cleanerToken')
  //           }
  //       })
    return (
        <li className="button-list__item">
           <button className="btn btn-outline-primary">Confirm to delete</button>
        </li>
    );
}