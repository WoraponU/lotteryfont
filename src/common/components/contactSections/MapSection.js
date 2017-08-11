import React from 'react';
import GoogleMap from 'google-map-react';
import { Grid, Row, Image } from 'react-bootstrap';

import ArrowMap from 'Components/common/ArrowMap';

import './MapSection.scss'
const MapComponent = ({ lang: { MapSection: content }, center, greatPlaceCoords, zoom }) => {
  return (
    <div>
      <div className="mapSection">       
        <Grid >
          <Row className="text-center">
            <h1>{ content.header }</h1>
            <Image src="/assets/images/common/line.png"></Image>
          </Row>
        </Grid>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY, language: "th", region: "TH", types: "(cities)" }}
            center={center}
            zoom={zoom}
            options={{
              scrollwheel: false,
            }}
            >
            <ArrowMap { ...greatPlaceCoords }/>         
          </GoogleMap>
        </div>      
      </div>
    </div>
  );
};

export default MapComponent;