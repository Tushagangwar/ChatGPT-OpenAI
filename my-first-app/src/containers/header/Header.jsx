import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="chatgpt__header section__padding" id="home">
    <div className="chatgpt__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with ChatGPT OpenAI</h1>
      <p> ChatGPT is an innovative move to build a connection between humans and a bot that connects so seamlessly that it almost feels like a natural conversation.</p>

      <div className="chatgpt__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="chatgpt__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="chatgpt__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;