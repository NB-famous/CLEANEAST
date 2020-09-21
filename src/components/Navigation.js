import React, {useState} from "react";
import "../styles/Navigation.scss";
import "../styles/ButtonList.scss"
import ButtonList from "./ButtonList"
import Content from "./Content"
import logo from "../docs/navlogo.png"
import {BrowserRouter, Link} from 'react-router-dom'



export default function Navigation() {

    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("appToken"))
    )

    return (
        <BrowserRouter>
        <main className="layout">
        <>
            <section className="sidebar">
                <Link to={'/'}>
                <img
                    className="sidebar--centered"
                    src={logo}
                    alt="cleaneast"
                />
                </Link>
                <hr className="sidebar__separator sidebar--centered" />
                <nav className="sidebar__menu">
                    <ul>
                        <ButtonList />
                    </ul>
                </nav>
            </section>
        </>
            <section className="content-body" >
            <Content  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            </section>
        </main>
        </BrowserRouter>
    );
}