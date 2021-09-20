import React, { useState, useEffect } from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import LogoHeader from './LogoHeader/LogoHeader';

import { PortfolioProvider } from '../context/context';

function App() {

  return (
    <PortfolioProvider>
      <LogoHeader />
      <About />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
