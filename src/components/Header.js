import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
const mainNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Project',
        path: '/project',
    },
    {
        display: 'About Me',
        path: '/about',
    },
    {
        display: 'Contact',
        path: '/contact',
    },
];


function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        console.log("hello")
    }

    return (
        <header>
            <h3>Logo here</h3>
            <nav ref={navRef}>
                {mainNav.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="header_menu_item"
                        >
                            <Link to={item.path}>
                                <span>{item.display}</span>
                            </Link>
                        </div>
                    );
                })}
                <button className = "nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className = "nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;