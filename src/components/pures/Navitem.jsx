import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const NavLink = ({ name, dest, isActive, click }) =>
  <Link
    className={classNames('nav-item', 'is-tab', isActive ? 'is-active' : false)}
    to={dest}
    onClick={click}
  >
    {name}
  </Link>;

NavLink.propTypes = {
  name: PropTypes.string,
  dest: PropTypes.string,
  click: PropTypes.func,
  isActive: PropTypes.bool,
};

NavLink.defaultProps = {
  name: '',
  dest: '',
  click: () => {},
  isActive: false,
};

export default NavLink;
