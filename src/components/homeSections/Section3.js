import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './Section3.scss'

const Section3 = ({ lang: { section3: content } }) => {
  return (
    <Grid className="section3 text-center">
      <Row>         
        <Col sm={12} md={12} lg={12} className="text-center">
          <h1 className="header">{content.header}</h1>          
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={3}>
          <Image src="/assets/images/Home/section3/baby.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="/assets/images/Home/section3/chair.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="/assets/images/Home/section3/code.png" />
        </Col>
        <Col lg={3} md={3}>
          <p className="subHeader">{content.subHeader}</p>
        </Col> 
      </Row>
      <Row>
        <Col lg={6} md={6}>
          <Image src="/assets/images/Home/section3/room.png" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="/assets/images/Home/section3/white.png" className="imgShadow" />
        </Col>
        <Col lg={3} md={3}>
          <Image src="/assets/images/Home/section3/line.png" className="imgLine" />
        </Col> 
        <Col lg={6} md={6}>
          <Image src="/assets/images/Home/section3/form.png" />
        </Col> 
      </Row>
      <Row className="boxBottom">
        <Col md={6} >
          <h3>{content.headerContent}</h3>
          <p>{content.content1}</p>       
          <p>{content.content2}</p>       
        </Col>
      </Row>
    </Grid>
  );
};

export default Section3;
