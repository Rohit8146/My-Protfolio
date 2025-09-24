import React, { useLayoutEffect, useRef } from "react";
import NavLink from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";
import gsap from "gsap";
import "./header.css";

function Header() {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "bounce.out",
      });
    }
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container">
        <div className="navbar">
          <Logo />
          <nav className="navlinks">
            <NavLink title="Home" link="/" />
            <NavLink title="About" link="#about" />
            <NavLink title="Portfolio" link="#portfolio" />
            <NavLink title="Contact" link="#contact" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
