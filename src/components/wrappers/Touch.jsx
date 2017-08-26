import React from 'react';
import PropTypes from 'prop-types';
import { scroller } from 'react-scroll';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router';

const enhance = compose(
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
);

const Touch = enhance(({ children }) =>
  <div>
    {children}
  </div>,
);

Touch.propTypes = {
  children: PropTypes.node,
};

Touch.defaultProps = {
  children: {},
};

export default withRouter(Touch);
