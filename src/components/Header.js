import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/VectorEPS_ByTailorBrands2.svg'
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
            <Link to="/">
                <div className='header__left'>
                    <img src={logo} className="navbar-coin shadowed" alt="Wurklo logo" />
                    <p className='header__logoText pt-3 fs-3'>Wurklo</p>
                </div>
            </Link>

            <div className='header__right' onClick={() => openNav()}>
                {user ? <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="shadow" alt="Profile Pic" /> : <img src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png" className="shadow" alt="Profile Pic" />}
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