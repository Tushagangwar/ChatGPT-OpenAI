import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="chatgpt__possibility section__padding" id="possibility">
    <div className="chatgpt__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="chatgpt__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>ChatGPT has revolutionized the field of customer service by providing an efficient and personalized experience for users. It has been trained on a variety of tasks, including language translation, text summarization, and conversation generation, making it one of the most versatile language models available today.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;