import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Slider from 'react-slick';

import styles from './Section2.scss'

class Section2 extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      // slidesToShow: 3,
      // slidesToScroll: 3,
      // arrows: true,
      // focusOnSelect: true,
      // lazyLoad: true,
      // pauseOnHover: true,
    };
    return (
      <Grid className={styles.section2}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <PageHeader className={styles.pageHeader}>OUR WORK</PageHeader>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6} lg={6} smOffset={6} mdOffset={6} lgOffset={6}>
            
          </Col>          
        </Row>
        <Slider {...settings} className={styles.slickSlider}>
          <img src="assets/images/home/section2/qualy.jpg" alt="qualy"/>
          <img src="assets/images/home/section2/ygg.png" alt="ygg"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
          <img src="assets/images/home/section2/mac5.png" alt="mac5"/>
        </Slider>
      </Grid>
    );
  }
}

export default Section2;