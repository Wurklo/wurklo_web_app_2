import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/VectorEPS_ByTailorBrands2.svg'
import Search from './Search'
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import LoginModal from './LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/user';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function Header() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    let { searchParams } = useParams();

    console.log(user)
    const signOut = () => {
        dispatch(setUser(null))
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
                        <>
                            <img src={user?.user.photoURL} className="" alt="Profile Pic" onClick={() => openNav()} />
                        </>
                        :
                        <>
                            <LoginModal />
                        </>
                }
            </div>
            <div id="mySidebar" className="sidebar shadow">
                <button className="closebtn" onClick={() => closeNav()}>×</button>
                <Link to="/my-account/">My Account</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/contacts">Contacts</Link>
                {user ? <a href="/" onClick={signOut}>Sign out</a> : <a href="/">Sign in</a>}
            </div>
        </div>
    );
};

export default Header;