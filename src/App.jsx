// @flow

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/pages/Hero';
import What from './components/pages/What';
import Esports from './components/pages/Esports';
import Events from './components/pages/Events';
import Partners from './components/pages/Partners';
import PageElement from './components/templates/PageElement';
import './App.css';

const App = () => (
  <Navigation>
    <PageElement name="hero" comp={<Hero />} />
    <PageElement name="what" comp={<What />} />
    <PageElement name="esports" comp={<Esports />} />
    <PageElement name="events" comp={<Events />} />
    <PageElement name="partners" comp={<Partners />} />
  </Navigation>
);

export default App;
