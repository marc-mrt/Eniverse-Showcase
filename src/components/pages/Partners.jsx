import React from 'react';
import styled from 'styled-components';

import Page from '../wrappers/Page';
import interback from '../../assets/images/interback-light.png';
import spotify from '../../assets/partners/spotify.png';
import uber from '../../assets/partners/uber.png';
import paypal from '../../assets/partners/paypal.png';
import tf1 from '../../assets/partners/tf1.png';
import twitch from '../../assets/partners/twitch.png';
import deliveroo from '../../assets/partners/deliveroo.png';
import monster from '../../assets/partners/monster.png';

const SuperPage = styled(Page)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 5em;
  height: 80%;
  width: 100%;
`;

const Item = styled.div`
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);
  transition: background-color 250ms linear;
  max-width: 100%;
  position: relative;
  margin-bottom: 0.75rem;
  .media:not(:last-child);
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    .image {
      transform: scale(1.1);
    }
  }
`;

const Figure = styled.figure`
  transition: transform 250ms linear;
`;

const title = 'Partners';
const subtitle = 'These are some of the organisations that already trust us';
const data = [
  {
    img: spotify,
  },
  {
    img: uber,
  },
  {
    img: paypal,
  },
  {
    img: tf1,
  },
  {
    img: twitch,
  },
  {
    img: deliveroo,
  },
  {
    img: monster,
  },
];

const Partners = () =>
  <SuperPage title={title} subtitle={subtitle} background={interback} hasPadding>
    <Wrapper>
      <div className="column is-10 is-offset-1">
        <div className="columns is-multiline is-centered">
          {data.map(item =>
            <div className="column is-2" key={item.img.toString()}>
              <Item>
                <div className="card-image">
                  <Figure className="image is-1by1">
                    <img src={item.img} alt="Partner" />
                  </Figure>
                </div>
              </Item>
            </div>,
          )}
        </div>
      </div>
    </Wrapper>
  </SuperPage>;

export default Partners;
