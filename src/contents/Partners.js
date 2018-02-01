// @flow

import markerIcon from '../assets/maps/marker.png';
import spotify from '../assets/partners/spotify.png';
import uber from '../assets/partners/uber.png';
import paypal from '../assets/partners/paypal.png';
import tf1 from '../assets/partners/tf1.png';
import twitch from '../assets/partners/twitch.png';
import deliveroo from '../assets/partners/deliveroo.png';
import monster from '../assets/partners/monster.png';

export const title = 'Partners';
export const subtitle = 'These are some of the organisations that already trust us';
export const partners = [
  {
    img: spotify,
    name: 'spotify',
  },
  {
    img: uber,
    name: 'uber',
  },
  {
    img: paypal,
    name: 'paypal',
  },
  {
    img: tf1,
    name: 'tf1',
  },
  {
    img: twitch,
    name: 'twitch',
  },
  {
    img: deliveroo,
    name: 'deliveroo',
  },
  {
    img: monster,
    name: 'monster',
  },
];

export const markers = [
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
export const styles = [
  { stylers: [{ saturation: -100 }] },
  { featureType: 'water', stylers: [{ color: '#444444' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#2f508e' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#888888' }] },
  {},
];
export const defaultOptions = {
  styles,
  scrollwheel: false,
};
