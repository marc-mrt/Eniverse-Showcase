import React from 'react';
import Layout from './components/pures/Layout';
import Partners from './components/pages/Partners';
import Hero from './components/pages/Hero';
import What from './components/pages/What';
import Esports from './components/pages/Esports';
import Contact from './components/pages/Contact';
import Footer from './components/pures/Footer';

const App = () => (
  <Layout style={{ textAlign: 'center' }}>
    <Hero />
    <What />
    <Esports />
    <Partners />
    <Contact />
    <Footer />
  </Layout>
);

export default App;
