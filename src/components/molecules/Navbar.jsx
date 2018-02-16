// @flow
/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events,
  jsx-a11y/anchor-is-valid */

import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import * as content from '../../contents/Navbar';
import logo from '../../assets/logo.png';

const composition = compose(
  withState('isActive', 'setActive', false),
  withHandlers({
    clickLogo: ({ scrollToPage }) => () => scrollToPage(0),
    activate: ({ setActive }) => () => setActive(active => !active),
    onClick: ({ scrollToPage, pages, setActive }) => (name) => {
      scrollToPage(pages.findIndex(page => page === name));
      setActive(false);
    },
  }),
);

const Navbar = ({
  onClick,
  clickLogo,
  activate,
  isActive,
}: {
  onClick: Function,
  clickLogo: Function,
  activate: Function,
  isActive: boolean,
}) => (
  <nav className="navbar" style={content.navStyle}>
    <div className="navbar-brand">
      <a className="navbar-item" onClick={clickLogo}>
        <img src={logo} alt="Eniverse" />
      </a>
      <div className="navbar-burger burger" onClick={activate}>
        <span />
        <span />
        <span />
      </div>
    </div>
    <div
      className={content.generateClassesForBurger(isActive)}
      style={content.generateStyleForBurger(isActive)}
    >
      <div className="navbar-start">
        {content.menus.map(menuItem => (
          <a
            className="navbar-item"
            onClick={() => onClick(menuItem.name)}
            key={menuItem.name}
            style={{ color: 'white' }}
          >
            {menuItem.display}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default composition(Navbar);
