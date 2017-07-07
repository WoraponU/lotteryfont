import React, { Component } from 'react';
import LiquidButton from '../../src/lib/liquidButton';

// import '../../src/lib/liquidButton';
import './LiquidButton.scss'

class liquidButton extends Component {
  componentDidMount() {
    const params = {
      radius: 200,
      color1: '#93d3d7',
      color2: '#8F17E1',
      color3: '#E509E6',
    };
    new LiquidButton(params);
  }

  render() {
    return (
      <div>LiquidButton</div>
    );
  }
}

export default liquidButton;
