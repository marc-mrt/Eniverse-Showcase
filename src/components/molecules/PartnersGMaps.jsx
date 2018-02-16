// @flow

import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { markers, defaultOptions } from '../../contents/Partners';

const PartnersGMaps = withGoogleMap(props => (
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

export default PartnersGMaps;
