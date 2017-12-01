import React from 'react';
import styled from 'styled-components';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import Page from '../wrappers/Page';
import Footer from '../pures/Footer';
import markerIcon from '../../assets/maps/marker.png';
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

const Container = styled.div`
  min-height: 30vh;
`;

const Item = styled.div`
  max-width: 100%;
  position: relative;
  margin-bottom: 0.75rem;
  .media: not(:last-child);
`;

const Partner = styled.img`
  transition: all 250ms linear;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const Figure = styled.figure`
  transition: transform 250ms linear;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 30vh;
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

const markers = [
  {
    position: {
      lat: 48.856353,
      lng: 2.344466,
    },
    key: 'Eniverse Paris',
    defaultAnimation: 2,
    icon: markerIcon,
  },
  {
    position: {
      lat: 51.50634,
      lng: -0.12289,
    },
    key: 'Eniverse London',
    defaultAnimation: 2,
    icon: markerIcon,
  },
];
const styles = [
  { stylers: [{ saturation: -100 }] },
  { featureType: 'water', stylers: [{ color: '#444444' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#2f508e' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#888888' }] },
  {},
];
const defaultOptions = {
  styles,
  scrollwheel: false,
};

const GoogleMaps = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={5}
    defaultOptions={defaultOptions}
    defaultCenter={{ lat: 50.946154, lng: 0.968369 }}
    onClick={props.onMapClick}
  >
    {markers.map(marker => <Marker {...marker} />)}
  </GoogleMap>
));

const Partners = () => (
  <SuperPage title={title} subtitle={subtitle} background={interback} hasPadding>
    <Wrapper>
      <Container className="columns is-multiline is-centered">
        {data.map(item => (
          <div className="column is-1" key={item.img.toString()}>
            <Item>
              <Figure className="image is-1by1">
                <Partner src={item.img} alt="Partner" />
              </Figure>
            </Item>
          </div>
        ))}
      </Container>
      <div className="columns is-centered">
        <div className="column is-one-third">
          <a className="button is-primary is-fullwidth" href="mailto:wyz@mail.com">
            Send us an email!
          </a>
          <div className="content has-text-centered">Hey Infos !</div>
        </div>
        <GoogleMaps
          containerElement={<MapContainer className="column is-one-third" />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      <Footer />
    </Wrapper>
  </SuperPage>
);

export default Partners;
