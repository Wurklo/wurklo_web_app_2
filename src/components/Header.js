import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, NavbarText, Button } from 'reactstrap';
import '../styles/header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <Navbar isOpen={isOpen} expand="xl" full dark className='container gx-md-5 px-md-5'>
                <NavbarBrand href="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" className="navbar-coin" alt="Wurklo logo" />
                    Wurklo
                    <div className="divider d-none d-lg-block"></div>
                    <a className='ps-2' href='https://xd.adobe.com/view/8bbf5175-56cc-4203-8cd4-acc29b27a285-deec/'><NavbarText className="d-lg-inline d-lg-none"><Button className="p-1 px-lg-5 button__testApp">                            
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Start</Button></NavbarText></a>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(isOpen ? false : "isOpen")} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="justify-content-start" style={{ width: "100%" }}>
                        <NavItem className='pt-1 pt-lg-0'><a onClick={() => setIsOpen(false)} href='/#tokenomics'>Tokenomics</a></NavItem>
                        <NavItem className='pt-1 pt-lg-0'><a onClick={() => setIsOpen(false)} href='/#timeline'>Roadmap</a></NavItem>
                        <NavItem className='pt-1 pt-lg-0'><a onClick={() => setIsOpen(false)} href='https://wurklo.gitbook.io/wurklo/' target="_blank" rel="noreferrer">Whitepaper/GitBook</a></NavItem>
                        {/* <NavItem className='pt-1 pt-lg-0'><NavLink onClick={() => setIsOpen(false)} to="/about">Founder's Story</NavLink></NavItem> */}
                        {/* <NavItem className='mb-2 py-1 mb-lg-0 py-lg-0'><NavLink onClick={() => setIsOpen(false)} to="/storePage">Store</NavLink></NavItem> */}
                        {/* <NavItem><NavLink onClick={() => setIsOpen(false)} to="/nex">NEx</NavLink></NavItem> */}
                        {/* <NavItem><NavLink onClick={() => setIsOpen(false)} to="#">Download</NavLink></NavItem> */}
                    </Nav>
                    {/* <NavbarText>$0.00</NavbarText>{' '} */}
                    {/* test app button  */}
                    <a href='https://xd.adobe.com/view/8bbf5175-56cc-4203-8cd4-acc29b27a285-deec/'>
                        <NavbarText className="d-none d-lg-block"><Button className="button__testApp">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Start</Button>
                        </NavbarText>
                    </a>
                    {/* wallet connect button  */}
                    {/* <NavbarText className="pe-5"><Button className="button__connect" id="ToolTipComingSoon">Connect Wallet</Button></NavbarText> */}
                </Collapse>
            </Navbar>
        </nav>
    );
};

export default Header;