import React, {useEffect, useState } from 'react';
import {Link , animateScroll as scroll} from 'react-scroll'; 
import './nav.css';
const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [theme, setTheme] = useState(false);

    const closeMenu = () => {
        setToggleMenu(false);
    }
    // console.log(theme)
    const changeTheme = () => {
        // console.log(theme);
        // console.log(theme);
        setTheme(!theme);
        if(theme){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    }
    return (
        <div className="navbar">
            <nav className="nav container">
                <a href="#" className="nav-logo" onClick={() => scroll.scrollToTop()}>Delivery</a>
                <ul className={ toggleMenu ? "nav-items active" : "nav-items"}>
                    <li className="nav-item">
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} className="nav-link" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="aboutUs" spy={true} smooth={true} duration={1000} className="nav-link" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="services" spy={true} smooth={true} duration={1000} className="nav-link" onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" to="contactUs" spy={true} smooth={true} duration={1000} className="nav-link" onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </li>
                    {toggleMenu && <a href="#" className="btn">Order Now!</a> }
                </ul>

                <div className="theme-toggler" onClick={changeTheme}></div>
                <div className={ toggleMenu ? "ham-menu active" : "ham-menu"} onClick={() => setToggleMenu(!toggleMenu)}></div>
                <a href="#" className="btn">Order Now!</a>
            </nav>
        </div>
    )
}

export default Nav;
