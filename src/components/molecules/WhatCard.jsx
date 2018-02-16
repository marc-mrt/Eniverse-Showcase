// @flow

import React from 'react';
import HoverCard from '../atoms/HoverCard';

const WhatCard = ({ title, subtitle, icon }: { title: string, subtitle: string, icon: string }) => (
  <HoverCard className="card">
    <div className="card-content">
      <div className="media" style={{ color: 'rgb(30, 53, 138)' }}>
        <div className="media-left">
          <figure className="icon">
            <i className={`fas fa-2x ${icon}`} />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>
      <div className="content">{subtitle}</div>
    </div>
  </HoverCard>
);

export default WhatCard;
