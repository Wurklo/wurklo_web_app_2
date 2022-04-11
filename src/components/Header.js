import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/VectorEPS_ByTailorBrands2.svg'
import Search from './Search'
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function Header() {
    const [user] = useState(null);
    const location = useLocation();
    let { searchParams } = useParams();

    const openSigninModal = () => {
        console.log("hello")
    }

    return (
        <div className={'header mb-3 ' + (location.pathname === "/" ? "" : "bg-white")} id="header">
            {location.pathname === "/" ?
                <div></div>
                :
                <>
                    <a href="/">
                        <div className='header__left'>
                            <img src={logo} className="navbar-coin" alt="Wurklo logo" />
                            <p className='header__logoText pt-3 fs-3'>Wurklo</p>
                        </div>
                    </a>
                    {/* <Search
                        placeholderDefault="Search wurkers ... ex. full stack developer, react"
                        placeholderSearchedValue={searchParams}
                    /> */}
                </>

            }
            <div className={'header__right ' + (location.pathname === "/" ? "mt-3" : "")}>
                {
                    user
                        ?
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="" alt="Profile Pic" onClick={() => openNav()} />
                        :
                        <Button outline className='header__signinButton shadow-none border-0' onClick={openSigninModal}>Sign in</Button>
                }
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