import React, { Component } from 'react';

import LiquidButton from '../../src/lib/liquidButton';
import './LiquidButton.scss'

class liquidButton extends Component {
  componentDidMount() {
    const { id, radius, color1, color2, color3 } = this.props;
    console.log(this.props.radius)
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

export default liquidButton;
