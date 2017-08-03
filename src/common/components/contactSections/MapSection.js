import React from 'react';
import GoogleMap from 'google-map-react';
import { Grid, Row, Image } from 'react-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow } from 'Components/common/LiquidCircleColor';
import ArrowMap from 'Components/common/ArrowMap';
// import googleKey  from '../../../config.js'

import './MapSection.scss'
// console.log(googleKey);
const MapComponent = ({ lang: { MapSection: content }, center, greatPlaceCoords, zoom }) => {
  return (
    <div>
      <div className="mapSection">       
        <Grid >
          <Row className="text-center">
            <h1>{ content.header }</h1>
            <Image src="/assets/images/common/line.png"></Image>
            <LiquidCircle id={30} radius={200} color={blue} position={["35px", "0px", "auto", "auto"]}/>
            <LiquidCircle id={31} radius={170} color={yellow} position={["108px", "94px", "auto", "auto"]}/>
          </Row>
        </Grid>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyAnw1NTcrOmtCA46LLjkVp13psfYSduCK8", language: "th", region: "TH", types: "(cities)"}}
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