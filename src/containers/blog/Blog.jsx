import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 05, 2025" text="GPT-3 and OpenAI: Transforming the Future of Artificial Intelligence and Machine Learning" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Dec 03, 2025" text="How GPT-3 is Revolutionizing Natural Language Processing in Modern Applications" />
        <Article imgUrl={blog03} date="Nov 28, 2025" text="Building Intelligent Chatbots: A Comprehensive Guide to GPT-3 Integration" />
        <Article imgUrl={blog04} date="Nov 25, 2025" text="The Impact of Large Language Models on Content Creation and Digital Marketing" />
        <Article imgUrl={blog05} date="Nov 20, 2025" text="Understanding GPT-3's Capabilities: From Code Generation to Creative Writing" />
      </div>
    </div>
  </div>
);

export default Blog;
