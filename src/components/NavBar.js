import React from "react"
import {Link, useHistory} from 'react-router-dom'
import logo from "../docs/navlogo.png"
import ButtonList from "./ButtonList"


const NavBar = (props) => {

    const {loggedIn, setLoggedIn, cleanerLogin, setCleanerLogin} = props;
    let history = useHistory()

    const handleLogout = () => {
        setLoggedIn(false)
        localStorage.removeItem("userToken");
        localStorage.removeItem("userUser");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("message-id");
        localStorage.removeItem("message-conversations");
        localStorage.removeItem("hiredCleaner");
        localStorage.removeItem("userLat");
        localStorage.removeItem("userLong");
        history.push('/');
    }

    const handleCleanerLogout = () => {
        setCleanerLogin(false)
        localStorage.removeItem("cleanerToken");
        localStorage.removeItem("cleanerUser");
        localStorage.removeItem("cleanerEmail");
        localStorage.removeItem("message-id");
        localStorage.removeItem("message-conversations");
        //localStorage.clear();
        history.push('/');
    }


  return (
    <section className="sidebar">
      <Link to={'/'}>
      <img
          className="sidebar--centered"
          src={logo}
          alt="cleaneast"
      />
      </Link>
      <hr className="sidebar__separator sidebar--centered" />
        { 
            loggedIn ?
            <nav className="sidebar__user"> 
            <ul>
            <button className="list-group-item list-group-item-action" onClick={handleLogout}>
            <h1><strong>Logout</strong></h1>
            </button>
            </ul>
            </nav>
            :
            cleanerLogin ?
            <nav className="sidebar__cleaner">
            <ul>
            <li>
            <Link to={'/'}>
            <button className="list-group-item list-group-item-action" >
            <h1><strong>Profile</strong></h1>
            </button>
            </Link>
            </li>
            <li>
            <Link to={'/cleaners/chatroom'}>
            <button className="list-group-item list-group-item-action" >
            <h1><strong>Chat Room</strong></h1>
            </button>
            </Link>
            </li>
            <li>
            <button className="list-group-item list-group-item-action" onClick={handleCleanerLogout }>
            <h1><strong>Logout</strong></h1>
            </button>
            </li>
            </ul>
            </nav>
            :
            <nav className="sidebar__menu">
            <ul>
            <ButtonList/>
            </ul>
            </nav>
        }  
              
    </section>
  )
}

export default NavBar