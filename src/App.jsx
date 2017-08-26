import React from 'react';
import { withRouter } from 'react-router';
import { compose, lifecycle } from 'recompose';

import Layout from './components/pures/Layout';
import Section from './components/wrappers/Section';
import Partners from './components/pages/Partners';
import Hero from './components/pages/Hero';
import What from './components/pages/What';
import Esports from './components/pages/Esports';
import Contact from './components/pages/Contact';
import Events from './components/pages/Events';
import ResponsiveScroll from './components/wrappers/ResponsiveScroll';

const enhance = compose(
  lifecycle({
    componentDidMount() {
      if (!this.props.location.hash) {
        this.props.history.push('#eniverse');
      }
    },
  }),
);

const App = enhance(() =>
  <Layout>
    <ResponsiveScroll>
      <Section name="#eniverse">
        <Hero />
      </Section>
      <Section name="#what">
        <What />
      </Section>
      <Section name="#esports">
        <Esports />
      </Section>
      <Section name="#events">
        <Events />
      </Section>
      <Section name="#partners">
        <Partners />
      </Section>
      <Section name="#contact">
        <Contact />
      </Section>
    </ResponsiveScroll>
  </Layout>,
);

export default withRouter(App);
