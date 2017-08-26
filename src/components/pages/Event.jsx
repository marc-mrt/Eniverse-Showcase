import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60vh;
  width: 100%;
  background: rgb(200, 200, 200);
  border: 1px solid grey;
`;

const Event = ({ title, desc, date }) =>
  <Wrapper>
    <div className="content">
      <h1>
        {title}
      </h1>
      <p>
        {desc}
      </p>
      {date}
    </div>
  </Wrapper>;

Event.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
};

Event.defaultProps = {
  title: '',
  desc: '',
  date: '',
};

export default Event;
