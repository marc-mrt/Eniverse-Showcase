import React from 'react';
import { Element } from 'react-scroll';

import Layout from './components/pures/Layout';
import Partners from './components/pages/Partners';
import Hero from './components/pages/Hero';
import What from './components/pages/What';
import Esports from './components/pages/Esports';
import Contact from './components/pages/Contact';
import Footer from './components/pures/Footer';

const App = () =>
  <Layout>
    <Element name="#eniverse">
      <Hero />
    </Element>
    <Element name="#what">
      <What />
    </Element>
    <Element name="#esports">
      <Esports />
    </Element>
    <Element name="#partners">
      <Partners />
    </Element>
    <Element name="#contact">
      <Contact />
    </Element>
    <Footer />
  </Layout>;

export default App;
