import React from 'react';
import mainLogo from '../images/foodoo-logo.png';
import { Link } from "react-router-dom";

let NewHeader = () => {
    return (
    <div className="new-header"> 
        <div><Link to="/events"><img src={mainLogo} className="main-logo" alt="mainlogo" /></Link></div>
        <div className="space"></div>
        <div><Link to="/logout">Log out</Link></div>
    </div>
    )
}

export default NewHeader;