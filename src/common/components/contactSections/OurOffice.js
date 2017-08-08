import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import LiquidCircle from 'Components/common/LiquidCircle';
import { blue } from 'Components/common/LiquidCircleColor';

import './OurOffice.scss'

const OurOfficeComponent = ({ lang: { OurOffice: content }}) => {
  return (
    <Grid className="ourOffice">
      <Row className="text-center">
        <h1>{ content.header }</h1>
      </Row>     
      <Row className="sectionPic">
        <Col lg={6} md={6} sm={6} className="text-right">
         <Row><Image src="/assets/images/contact/window.png" className="imgWindow"/></Row>
         <Row><Image src="/assets/images/contact/condo.png"/></Row>
        </Col>
        <Col lg={3} md={3} sm={3}>
          <Row><Image src="/assets/images/contact/human.png"/></Row>
          <Row className="sayHello">
            <h3>{ content.contactTitle }</h3>
            <p dangerouslySetInnerHTML={{ __html: content.contactSubTitle }}></p>
            <LiquidCircle id={32} radius={180} color={blue} position={["auto", "0px", "-400px", "auto"]}/>          
          </Row>
        </Col>
        <Col lg={3} md={3} sm={3}>
          <Row> 
            <h3>{ content.titleAddress }</h3>
            <p>{ content.subTitleAddress }</p>
          </Row>
          <Row><Image src="/assets/images/contact/chair.png"/></Row>
        </Col>
      </Row>      
      <Row>
        <Col lg={6} md={6} sm={6} className="text-right">
          <Row><Image src="/assets/images/contact/cat.png" className="imgCat"/></Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default OurOfficeComponent;