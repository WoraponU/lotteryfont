import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './Section3.scss'

const Section3 = () => {
  return (
    <Grid className="section3 text-center">
      <Row>         
        <Col sm={12} md={12} lg={12} className="text-center">
          <h1 className="header">our moms said, we are the best.</h1>          
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={3}>
          <Image src="assets/images/Home/section3/baby.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="assets/images/Home/section3/chair.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="assets/images/Home/section3/code.png" />
        </Col>
        <Col lg={3} md={3}>
          <p className="subHeader">Transform brands, grow businesses and make people’s lives better.</p>
        </Col> 
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <Image src="assets/images/Home/section3/room.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="assets/images/Home/section3/white.png" className="imgShadow" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="assets/images/Home/section3/line.png" className="imgLine" />
        </Col> 
        <Col lg={6} md={6}>
          <Image src="assets/images/Home/section3/form.png" />
        </Col> 
      </Row>
      <Row className="boxBottom">
        <Col md={6} >
          <h3 >We are a Bangkok based digital agency with global reach.</h3>
          <p>We believe brands are made by the interactions they create. We believe that beautiful and usable are complementary. We believe that everything we put in front of your customers should be interesting and useful to each one of them.</p>       
          <p>We are LiveArea, the PFS digital experience agency with a boutique approach and world-class capabilities. We meld strategy, creativity, and technology until they disappear beneath perfectly branded commerce experiences for core customers</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default Section3;
