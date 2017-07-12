import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

// import styles from './Section2.scss'
import './Section2.scss'

class Section2 extends Component {
  render() {
    const settings = {
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      draggable: false,
      focusOnSelect: true,
      lazyLoad: true,
      // nextArrow: '<div>a</div>',
      // prevArrow: '<',
    };
    return (
      <div className="section2">
        <Grid>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <h1 className="text-center">OUR WORK</h1>
            </Col>
          </Row>
        </Grid>
        <Slider {...settings} className="slickSlider">
          <img src="assets/images/home/section2/qualy.jpg" alt="qualy"/>
          <img src="assets/images/home/section2/ygg.png" alt="ygg"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
        </Slider>
      </div>
    );
  }
}

export default Section2;