import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function Header() {
    const [user] = useState("Bobby");
    
    return (
        <div className='header' id="header">
            <div className='header__left'>
                <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" className="navbar-coin shadow" alt="Wurklo logo" />
                <p className='header__logoText pt-3 fs-3 text-secondary'>Wurklo</p>
            </div>
            <div className='header__right' onClick={() => openNav()}>
                {user ? <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="shadow" alt="Profile Pic" /> : <img src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png" className="shadow" alt="Profile Pic" /> }
            </div>
            <div id="mySidebar" className="sidebar shadow">
                <button className="closebtn" onClick={() => closeNav()}>×</button>
                <Link to="/my-account/">My Account</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/contacts">Contacts</Link>
                {user ? <a href="/">Sign out</a> : <a href="/">Sign in</a>}
            </div>
        </div>
    );
};

export default Header;