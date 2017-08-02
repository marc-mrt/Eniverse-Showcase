import React from 'react';
import styled from 'styled-components';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import Page from '../wrappers/Page';
import Footer from '../pures/Footer';
import markerIcon from '../../assets/maps/marker.png';

const SuperPage = styled(Page)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 5em;
  height: 80%;
  width: 100%;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 60vh;
`;

const title = 'Contact us !';
const subtitle = 'Use the following informations in order to get in touch with us';
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

const GoogleMaps = withGoogleMap(props =>
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={5}
    defaultOptions={defaultOptions}
    defaultCenter={{ lat: 50.946154, lng: 0.968369 }}
    onClick={props.onMapClick}
  >
    {markers.map(marker => <Marker {...marker} />)}
  </GoogleMap>,
);

const Partners = () =>
  <SuperPage title={title} subtitle={subtitle} hasPadding>
    <Wrapper>
      <div className="columns">
        <div className="column">
          <a className="button is-primary is-fullwidth" href="mailto:wyz@mail.com">
            Send us an email!
          </a>
          Hey Infos !
        </div>
        <GoogleMaps
          containerElement={<MapContainer className="column" />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
      <Footer />
    </Wrapper>
  </SuperPage>;

export default Partners;
