import React, { Component } from 'react';
import LiquidButton from '../../src/lib/liquidButton';

// import '../../src/lib/liquidButton';
import './LiquidButton.scss'

class liquidButton extends Component {
  componentDidMount() {
    const params = {
      radius: 300,
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
