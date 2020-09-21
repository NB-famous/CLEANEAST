import React from "react";
import "../styles/ButtonList.scss";
import { Link } from "react-router-dom";


export default function ButtonList(props) {
    
    return (
        <li className="button-list__item">
        <Link to={'/users/login'}>
            <button className="btn-users"/>
        </Link>
        <Link to={'/cleaners/login'}>
            <button className="btn-cleaner"/>
        </Link>
        </li>
    );
}