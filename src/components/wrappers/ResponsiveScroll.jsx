import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import Desktop from './Desktop';
import Touch from './Touch';

const ResponsiveScroll = ({ children }) =>
  <div>
    <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
      <Desktop>
        {children}
      </Desktop>
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1224}>
      <Touch>
        {children}
      </Touch>
    </MediaQuery>
  </div>;

ResponsiveScroll.propTypes = {
  children: PropTypes.node,
};

ResponsiveScroll.defaultProps = {
  children: {},
};

export default ResponsiveScroll;
