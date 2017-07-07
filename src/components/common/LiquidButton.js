import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LiquidButton from 'Lib/liquidButton';
import './LiquidButton.scss'

class liquidButton extends Component {
  componentDidMount() {
    const { id, radius, color1, color2, color3 } = this.props;

    const params = {
      id,
      radius,
      color1,
      color2,
      color3,
    };

    new LiquidButton(params);
  }

  render() {
    return (
      <canvas id={`liquidButton${this.props.id}`}></canvas>
    );
  }
}

liquidButton.defaultProps = {
  radius: 200,
  color1: '#36dfe7',
  color2: '#8f17e1',
  color3: '#e509e6',
};

liquidButton.propTypes = {
  id: PropTypes.number,
  radius: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
};

export default liquidButton;
