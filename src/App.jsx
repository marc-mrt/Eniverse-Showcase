import React from 'react';

import Layout from './components/pures/Layout';
import Section from './components/wrappers/Section';
import Partners from './components/pages/Partners';
import Hero from './components/pages/Hero';
import What from './components/pages/What';
import Esports from './components/pages/Esports';
import Contact from './components/pages/Contact';
import FullPage from './components/wrappers/FullPage';

const App = () => {
  const app = (
    <Layout>
      <FullPage>
        <Section name="#eniverse">
          <Hero />
        </Section>
        <Section name="#what">
          <What />
        </Section>
        <Section name="#esports">
          <Esports />
        </Section>
        <Section name="#partners">
          <Partners />
        </Section>
        <Section name="#contact">
          <Contact />
        </Section>
      </FullPage>
    </Layout>
  );
  return app;
};
export default App;
