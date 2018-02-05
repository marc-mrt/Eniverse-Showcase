// @flow

import React from 'react';
import SvgDot from '../atoms/SvgDot';

const Dot = ({
  isTop,
  isBlock,
  isActive,
}: {
  isTop: boolean,
  isBlock: boolean,
  isActive: boolean,
}) => (
  <SvgDot height="6" width="6" isActive={isActive} isBlock={isBlock}>
    {isTop ? <rect y="2.5" width="6" height="2.5" /> : <circle r="2.5" cx="3" cy="3" />}
  </SvgDot>
);

export default Dot;
