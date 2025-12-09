import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is a state-of-the-art language processing AI model developed by OpenAI. It uses deep learning to produce human-like text, capable of translation, question-answering, and creative content generation. With 175 billion parameters, it represents one of the most powerful AI systems available today." />
    </div>
    <div className="gpt3__whatgpt3-header">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Build intelligent conversational agents that understand context and respond naturally to user queries, providing seamless customer support and engagement." />
      <Feature title="Knowledgebase" text="Create comprehensive knowledge systems that can retrieve and synthesize information from vast datasets, making complex information accessible and understandable." />
      <Feature title="Education" text="Develop personalized learning experiences with AI-powered tutoring systems that adapt to individual student needs and learning styles." />
    </div>
  </div>
);

export default WhatGPT3;
