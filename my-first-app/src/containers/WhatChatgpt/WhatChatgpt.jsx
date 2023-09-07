import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatChatgpt.css';

const WhatChatgpt = () => (
  <div className="chatgpt__whatchatgpt section__margin" id="whatchatgpt">
    <div className="chatgpt__whatchatgpt-feature">
      <Feature title="What is ChatGPT" text="ChatGPT is an artificial intelligence trained to assist with a variety of tasks. More specifically, though, it is a language model AI designed to produce human-like text and converse with people." />
    </div>
    <div className="chatgpt__whatchatgpt-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="chatgpt__whatchatgpt-container">
      <Feature title="Chatbots" text="ChatGPT is an AI chatbot that was initially built on a family of large language models. An AI chatbot that quickly became a sensation and captured the interest and imagination of people." />
      <Feature title="Knowledgebase" text="ChatGPT can serve as a comprehensive database of knowledge that can be accessed with the right prompt. ChatGPT includes a quick knowledge retrieval tool that saves time." />
      <Feature title="Education" text="ChatGPT is a powerful tool that can help educators and students if used thoughtfully. There are many ways to get there, and the education community is where the best answers will come from." />
    </div>
  </div>
);

export default WhatChatgpt;