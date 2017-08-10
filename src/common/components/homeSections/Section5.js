import React from 'react';
import { Grid, Image, Row, Col,Clearfix } from 'react-bootstrap';

import './Section5.scss'

const Section5 = ({ lang: { section5: content } }) => {
  return (
    <div className="section5">
      <Grid>
        <h1 className="header">{content.header}</h1>
      </Grid>
      <Grid className="groupClient">                     
        <Row className="show-grid">
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/chula.png"/></Col>
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/double.png"/></Col>
          <Clearfix visibleXsBlock></Clearfix>
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/qualy.png"/></Col> 
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/bps.png"/></Col>
          </Row><Row>
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/bsu.png"/></Col>
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/ygg.png"/></Col>
          <Clearfix visibleXsBlock></Clearfix>
          <Col md={3} lg={3} sm={3} xs={6}><Image src="/assets/images/home/section5/spring.png"/></Col>
          <Col md={3} lg={3} sm={3} xs={6}><Image className="imgMac" src="/assets/images/home/section5/mac.png"/></Col>                                               
        </Row>       
      </Grid> 
    </div>
  );
};

export default Section5;