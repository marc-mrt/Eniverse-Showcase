// @flow

import React from 'react';
import { Element } from 'react-scroll';

const PageElement = ({ name, comp }: { name: string, comp: any }) => (
  <Element name={name}>{comp}</Element>
);

export default PageElement;
