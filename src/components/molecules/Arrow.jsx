// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events,
  jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */


import React from 'react';
import './Arrow.css';

const Arrow = ({ type, onClick }: { type: 'left' | 'right', onClick: Function }) => (
  <a className={`arrow ${type.toString()}`} onClick={onClick} />
);

export default Arrow;
