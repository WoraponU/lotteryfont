import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { attractHoverEffect } from 'Lib';
import './PopCircle.scss'

class liquidButton extends Component {
  componentDidMount() {
    // const { id, radius, color } = this.props;
    // const params = {
    //   id,
    //   radius,
    //   color,
    // };

    new attractHoverEffect(this.eiei);
  }

  render() {
    // const [ top, right, bottom, left ] = this.props.position;
    // const styles = {
    //   top,
    //   right,
    //   bottom,
    //   left,
    // } 
    
    return (
       <ul className="popCircle">
        <li>
          <button id="eiei" ref={(el) => { this.eiei = el; }} >🦊</button>
        </li>
      </ul>
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
