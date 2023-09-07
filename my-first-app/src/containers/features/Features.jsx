import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Content creation',
    text: 'ChatGPT can be used to generate high-quality content for websites, blogs, or social media platforms in a few seconds.It can also be used for creative writing applications, where it can help users generate unique ideas.',
  },
  {
    title: 'Research assistance',
    text: 'ChatGPT can be an asset in supporting and streamlining the research process for academic projects, assignments, or personal interests.',
  },
  {
    title: 'Language learning',
    text: 'ChatGPT can be a valuable tool for language learning, offering translations, grammar explanations, vocabulary practice, and conversation simulations to help students practice and improve their language skills.',
  },
  {
    title: 'Writing & Debugging code',
    text: 'ChatGPT can write code for simple or repetitive tasks, such as file I/O operations, data manipulation, and database queries. Its bug fixing abilities can also be a valuable tool for programmers.',
  },
];

const Features = () => (
  <div className="chatgpt__features section__padding" id="features">
    <div className="chatgpt__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="chatgpt__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;