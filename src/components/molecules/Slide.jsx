// @flow

import React from 'react';
import FitPlayer from '../atoms/FitPlayer';

const Slide = ({
  title,
  desc,
  media,
  desktop,
}: {
  title: string,
  desc: string,
  media: string,
  desktop: boolean,
}) => (
  <div className="card">
    <div className="card-image" style={{ padding: '.25em', height: desktop ? '40vh' : 'auto' }}>
      <FitPlayer id={media} videoId={media.slice(media.indexOf('?v=') + 3)} />
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4" style={{ color: 'rgb(30, 53, 138)' }}>
            {title}
          </p>
        </div>
      </div>
      <div className="content" style={{ color: '#605f5f' }}>
        {desc}
      </div>
    </div>
  </div>
);

export default Slide;
