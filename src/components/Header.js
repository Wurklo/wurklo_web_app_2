import React, { useState } from 'react';

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
                {user ? <img src="https://lh3.googleusercontent.com/a-/AOh14GgdkLuhZwHKkewS9UZN-0fI4DD1LdywsKJiig-LMw=s288-p-rw-no" className="shadow" alt="Profile Pic" /> : <img src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png" className="shadow" alt="Profile Pic" /> }
            </div>
            <div id="mySidebar" className="sidebar shadow">
                <button className="closebtn" onClick={() => closeNav()}>×</button>
                <a href="/">My Account</a>
                <a href="/">Messages</a>
                <a href="/">Contacts</a>
                {user ? <a href="/">Sign out</a> : <a href="/">Sign in</a>}
            </div>
        </div>
    );
};

export default Header;