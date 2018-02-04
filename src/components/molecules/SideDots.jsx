// @flow

import React from 'react';
import Dot from './Dot';
import DotsContainer from '../atoms/DotsContainer';

const SideDots = ({ pages, currentPage }: { pages: Array<string>, currentPage: number }) => (
  <DotsContainer>
    {pages.map(page => (
      <Dot
        isTop={page === 'hero'}
        isActive={page === pages[currentPage]}
        key={page}
      >
        {page}
      </Dot>
    ))}
  </DotsContainer>
);

export default SideDots;
