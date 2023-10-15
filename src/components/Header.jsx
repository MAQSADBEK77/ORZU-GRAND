import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header.css";
import HeaderLocation from "./HeaderLocation";
import HeaderRight from "./HeaderRight";
import Logo from "./Logo.jsx";
function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? "header headerFixed" : "header"}>
      <div className="container main">
        <div className="header-left">
          <HeaderLocation />
        </div>
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-right">
          <HeaderRight />
        </div>
      </div>
      <div className="container menu">
        <NavLink to="/">
          <div></div>МАГАЗИН
        </NavLink>
        <div className="menu-border"></div>
        <NavLink to="/info">
          <div></div>О КОМПАНИИ
        </NavLink>
        <div className="menu-border"></div>
        <NavLink to="/products">
          <div></div>ПРОДУКЦИЯ{" "}
        </NavLink>
        <div className="menu-border"></div>
        <NavLink to="/analyze">
          <div></div>УСЛУГИ{" "}
        </NavLink>
        <div className="menu-border"></div>
        <NavLink to="/newspromotions">
          <div></div>АКЦИИ И НОВОСТИ
        </NavLink>
        <div className="menu-border"></div>
        <NavLink to="/contacts">
          <div></div>ОБРАТНАЯ СВЯЗЬ
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
