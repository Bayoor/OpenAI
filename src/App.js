import React, { Suspense, lazy } from 'react'

import { Header, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const Features = lazy(() => import('./containers/features/Features'));
const Possibility = lazy(() => import('./containers/possibility/Possibility'));
const Blog = lazy(() => import('./containers/blog/Blog'));
const Footer = lazy(() => import('./containers/footer/Footer'));

const App = () => {
  return (
    <div className= "App">
      <div className= 'gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </Suspense>
    </div>
  )
}

export default App