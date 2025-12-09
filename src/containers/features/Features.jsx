import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Advanced Natural Language Understanding',
    text: 'GPT-3 comprehends context and nuance in human language, enabling it to generate coherent and contextually relevant responses across diverse topics and industries.',
  },
  {
    title: 'Seamless API Integration',
    text:'Integrate GPT-3 into your applications effortlessly with our comprehensive API. Build powerful AI features without the need for extensive machine learning expertise.',
  },
  {
    title: 'Real-Time Content Generation',
    text:'Generate high-quality content instantly, from articles and emails to code and creative writing, helping you save time and boost productivity.',
  },
  {
    title: 'Customizable Model Training',
    text:'Fine-tune GPT-3 on your specific data to create tailored AI solutions that understand your unique business needs and industry-specific terminology.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
        </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
        

      </div>
    </div>
  )
}

export default Features