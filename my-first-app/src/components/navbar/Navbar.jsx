import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="chatgpt__navbar">
      <div className="chatgpt__navbar-links">
        <div className="chatgpt__navbar-links_logo">
          <h3>ChatGPT</h3>
        </div>
        <div className="chatgpt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatchatgpt">What is ChatGPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="chatgpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="chatgpt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="chatgpt__navbar-menu_container scale-up-center">
          <div className="chatgpt__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatchatgpt">What is ChatGPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="chatgpt__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;