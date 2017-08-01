import React, {PropTypes, Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';


import './MapSection.scss'

  

class Map extends Component {
  
static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    scrollwheel: PropTypes.bool,
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    scrollwheel: false,   
  };

  shouldComponentUpdate = shouldPureComponentUpdate;
 

  render() {
    return (
    <div className="mapSection">
      <Grid >
        <Row className="text-center">
          <h1>contact us</h1>
        </Row>
      </Grid>
      <Row style={{width: '100%', height: '400px'}}>
        <GoogleMap
        apiKey={"AIzaSyAnw1NTcrOmtCA46LLjkVp13psfYSduCK8"} 
        center={this.props.center}
        zoom={this.props.zoom}
        scrollwheel={this.props.scrollwheel}
        options={{
            disableDoubleClickZoom: false,
            scrollwheel: false
          }}
        >
        <div className="place" lat={59.938043} lng={30.080121}>HiHobbiz</div>
      </GoogleMap>

      </Row>
    </div>
    );
  }
}

export default Map;

