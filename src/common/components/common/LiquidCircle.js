import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LiquidButton } from 'Lib';
import './LiquidCircle.scss'

class liquidButton extends Component {
  componentDidMount() {
    const { id, radius, color } = this.props;
    const params = {
      id,
      radius,
      color,
    };

    new LiquidButton(params);
  }

  render() {
    const [ top, right, bottom, left ] = this.props.position;
    const styles = {
      top,
      right,
      bottom,
      left,
    } 
    
    return (
      <canvas id={`liquidButton${this.props.id}`} style={styles}></canvas>
    );
  }
}

liquidButton.propTypes = {
  id: PropTypes.number,
  radius: PropTypes.number,
  color: PropTypes.string,
  position: PropTypes.array,
};

export default liquidButton;
