import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Departments from '../sections/Departments';
import Contact from '../sections/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GreenBelt | Sustainable Development & Afforestation Uganda</title>
        <meta name="description" content="GreenBelt Afforestation Initiative Uganda - Empowering communities through sustainable development, health, and environmental restoration." />
      </Helmet>
      <Hero />
      <About />
      <Departments />
      <Contact />
    </>
  );
};

export default Home;
