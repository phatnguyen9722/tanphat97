import React, { useRef, useState, useEffect } from "react";
import _ from "lodash";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Project",
    path: "/project",
  },
  {
    display: "About Me",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "My CV",
    path: "/cv",
  },
];

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleItemClick = (path) => {
    showNavbar();
    if (path.startsWith("/#")) {
      const targetId = path.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const topOffset = targetElement.offsetTop;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = path;
    }
  };

  const prevScrollY = useRef(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const debounceHandleScroll = _.debounce(() => {
      const currentScrollY = window.scrollY;
      prevScrollY.current = currentScrollY;

      // Check the direction of the scroll
      if (currentScrollY === 0) {
        setOpacity(1);
      } else if (currentScrollY > lastScrollTop) {
        setOpacity(0);
      } else {
        setOpacity(0.85);
      }
      // Store the last scroll position
      setLastScrollTop(currentScrollY);
    }, 300);

    window.addEventListener("scroll", debounceHandleScroll);

    return () => {
      window.removeEventListener("scroll", debounceHandleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header style={{ opacity }}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Here is Logo" />
          </Link>
        </div>
        <nav ref={navRef}>
          {mainNav.map((item, index) => {
            return (
              <div
                key={index}
                className="header_menu_item"
                onClick={() => handleItemClick(item.path)}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            );
          })}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <button className="change-theme-btn" onClick={ () => console.log("test") }>
          <FaMoon />
        </button>
      </div>
    </header>
  );
}

export default Header;
