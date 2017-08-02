import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue } from 'Components/common/LiquidCircleColor';

import './OurOffice.scss'

const OurOffice = () => {
  return (
    <Grid className="ourOffice">
      <Row className="text-center">
        <h1>OUR OFFICES</h1>
      </Row>     
      <Row className="sectionPic">
        <Col lg={6} className="text-right">
         <Row><Image src="/assets/images/contact/window.png" className="imgWindow"/></Row>
         <Row><Image src="/assets/images/contact/condo.png"/></Row>
        </Col>
        <Col lg={3}>
          <Row><Image src="/assets/images/contact/human.png"/></Row>
          <Row className="sayHello">
          <h3>Or Say Hello</h3>
          <p>+66 (0) 89-822-1223 <br/>  
          hello@hobbiz.co.th</p>
          <LiquidCircle id={32} radius={180} color={blue} position={["auto", "0px", "-400px", "auto"]}/>
          
          </Row>
        </Col>
        <Col lg={3}>
          <Row> 
            <h3>Come See Us</h3>
            <p>206-207 2th Floor Promphan Building 3
                Lat Phrao 3 Rd. Chom Phon, Chatuchak
                Bangkok, Thailand 10900
            </p>
          </Row>
          <Row><Image src="/assets/images/contact/chair.png" /></Row>
        </Col>
      </Row>      
      <Row>
        <Col lg={6} className="text-right">
          <Row> <Image src="/assets/images/contact/cat.png" className="imgCat"/></Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default OurOffice;