import React, {PropTypes, Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue, yellow } from 'Components/common/LiquidCircleColor';

import ArrowMap from 'Components/common/ArrowMap';
import './MapSection.scss'

class Map extends Component {
  
static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [13.8119366, 100.5647296],
    zoom: 18,
    greatPlaceCoords: {lat: 13.8119366, lng: 100.5647296}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;
 

  render() {
    return (
    <div className="mapSection">
       
      <Grid >
        <Row className="text-center">
          <h1>contact us</h1>
          <LiquidCircle id={30} radius={200} color={blue} position={["35px", "0px", "auto", "auto"]}/>
          <LiquidCircle id={31} radius={170} color={yellow} position={["108px", "94px", "auto", "auto"]}/>
        </Row>
      </Grid>
      <div className="map">
        <GoogleMap
        bootstrapURLKeys={{key: "AIzaSyAnw1NTcrOmtCA46LLjkVp13psfYSduCK8" , language:"th", region:"TH", types : "(cities)"}}
        center={this.props.center}
        zoom={this.props.zoom}
        options={{
            scrollwheel: false,
            mapTypeId: "roadmap",
            title: "titel",
            draggable: false,
            types: ["locality"]
           
          }}
        >
         <ArrowMap {...this.props.greatPlaceCoords} />         
      </GoogleMap>
      </div>
      
    </div>
    );
  }
}

export default Map;

