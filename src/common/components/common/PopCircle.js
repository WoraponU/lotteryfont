import React, { Component } from 'react';

import { attractHoverEffect } from 'Lib';
import './PopCircle.scss'

class PopCircle extends Component {
  componentDidMount() {
    new attractHoverEffect(this.popCircle);
  }

  render() {
    const { color, radius, position: [ top, right, bottom, left ] } = this.props;
    const buttonStyle = {
      background: color,
      width: radius,
      height: radius,
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      borderRadius: '50%',
      border: '0',
    }
    
    return (
       <ul className="popCircle">
        <li >
          <button style={buttonStyle} ref={(el) => { this.popCircle = el; }} ></button>
        </li>
      </ul>
    );
  }
}

export default PopCircle;
