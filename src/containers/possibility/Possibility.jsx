import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Unlock the full potential of artificial intelligence with GPT-3. Transform your business operations, enhance creativity, and solve complex problems with AI that understands and generates human-like text. Join thousands of innovators already leveraging the power of advanced language models.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility