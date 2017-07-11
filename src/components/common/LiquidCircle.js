import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LiquidButton from 'Lib/liquidButton';
import './LiquidCircle.scss'

class liquidButton extends Component {
  componentDidMount() {
    const { id, radius, color } = this.props;
    console.log(radius);
    const params = {
      id,
      radius,
      color,
    };

    new LiquidButton(params);
  }

  render() {
    return (
      <canvas id={`liquidButton${this.props.id}`}></canvas>
    );
  }
}

liquidButton.propTypes = {
  id: PropTypes.number,
  radius: PropTypes.number,
  color: PropTypes.string,
};

export default liquidButton;
