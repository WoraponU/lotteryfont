import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

// import styles from './Section2.scss'

class Section2 extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      focusOnSelect: true,
      lazyLoad: true,
      pauseOnHover: true,
      
    };
    return (
      <Slider {...settings}>
        <img src="assets/images/home/section2/qualy.jpg" alt="qualy"/>
        <img src="assets/images/home/section2/ygg.png" alt="ygg"/>
        <img src="assets/images/home/section2/mac5.png" alt="ygg"/>
      </Slider>
    );
  }
}

export default Section2;