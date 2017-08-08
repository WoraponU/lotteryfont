import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose'
import { MapComponent } from 'Components/contactSections'
import { withRouter } from 'react-router-dom'

import { withLang } from 'Hocs';

class Map extends Component {
  render() {
    return (   
      <MapComponent {...this.props} />
    );
  }
}

const enhance = compose(
  withRouter,
  withLang('contact/MapSection')
);

export default enhance(Map);

Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.object
};

Map.defaultProps = {
  center: [13.8119366, 100.5647296],
  zoom: 18,
  greatPlaceCoords: {lat: 13.8119000, lng: 100.5645100}
};

