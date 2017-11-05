import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Arrow.css';

const Arrow = ({ type, action }) => (
  <button className={classNames('arrow', type.toString())} onClick={action}>
    <svg
      width="90px"
      height="180px"
      viewBox="0 0 50 80"
      xmlSpace="preserve"
    >
      <polyline
        fill="none"
        stroke="#1e358a"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={
          type === 'right'
            ? '0.375,0.375 45.63,38.087 0.375,75.8'
            : '45.63,75.8 0.375,38.087 45.63,0.375'
        }
      />
    </svg>
  </button>
);

Arrow.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func,
};

Arrow.defaultProps = {
  type: '',
  action: () => {},
};

export default Arrow;
