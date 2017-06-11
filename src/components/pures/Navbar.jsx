/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scroller, animateScroll } from 'react-scroll';
import classNames from 'classnames';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { Link, withRouter } from 'react-router-dom';

import NavLink from './Navitem';
import logo from '../../assets/logo.png';

const Wrapper = styled.div`
  width: 100%;
`;

const navStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
  width: '100%',
  position: 'fixed',
};

const Navbar = ({ clickLogo, clickHamburger, clickCloseburger, isActive, isHam }) =>
  <Wrapper className="nav" style={navStyle}>
    <div className="nav-left">
      <Link to="#eniverse" className="nav-item" onClick={clickLogo}>
        <img src={logo} alt="Eniverse" />
      </Link>
    </div>

    <div
      className={classNames('nav-right', 'nav-menu', isHam ? 'is-active' : false)}
      style={{ backgroundColor: isHam ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}
    >
      <NavLink
        name={'What we do'}
        dest={'#what'}
        isActive={isActive('#what')}
        click={clickCloseburger}
      />
      <NavLink
        name={'eSports'}
        dest={'#esports'}
        isActive={isActive('#esports')}
        click={clickCloseburger}
      />
      <NavLink
        name={'Our partners'}
        dest={'#partners'}
        isActive={isActive('#partners')}
        click={clickCloseburger}
      />
      <NavLink
        name={'Contact us'}
        dest={'#contact'}
        isActive={isActive('#contact')}
        click={clickCloseburger}
      />
    </div>

    <span className="nav-toggle" onClick={clickHamburger}>
      <span />
      <span />
      <span />
    </span>
  </Wrapper>;

/* eslint-disable react/forbid-prop-types */
Navbar.propTypes = {
  clickLogo: PropTypes.func,
  clickHamburger: PropTypes.func,
  clickCloseburger: PropTypes.func,
  isActive: PropTypes.func,
  isHam: PropTypes.bool,
};

Navbar.defaultProps = {
  clickLogo: () => {},
  clickHamburger: () => {},
  clickCloseburger: () => {},
  isActive: () => {},
  isHam: false,
};

const composition = compose(
  lifecycle({
    componentDidUpdate() {
      const hash = this.props.location.hash;
      if (hash) {
        scroller.scrollTo(hash, {
          duration: 500,
          smooth: true,
        });
      }
    },
  }),
  withState('isHam', 'setHam', false),
  withHandlers({
    clickLogo: () => () => animateScroll.scrollToTop(),
    clickHamburger: ({ setHam }) => () => setHam(nav => !nav),
    clickCloseburger: ({ setHam }) => () => setHam(false),
    isActive: ({ location }) => name => name === location.hash,
  }),
);
const enhance = compose(composition);
const EnhancedComponent = enhance(Navbar);

export default withRouter(EnhancedComponent);
