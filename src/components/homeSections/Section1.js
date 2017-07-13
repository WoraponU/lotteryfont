import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './Section1.scss'


const Section1 = () => {
  return (
    <Grid className="section1">
      <Row>
        <Col mdHidden lgHidden sm={5} className="colHight"></Col>
        <Col mdOffset={5} lgOffset={6} md={7} lg={6} sm={7}>
          <Image src="assets/images/home/section1.png" responsive />
        </Col>
      </Row>
      <Row className="header">
        <Col mdOffset={4} lgOffset={4} md={8} lg={8} sm={12} xs={12}>
          <h2>Every interaction <br/>
            is a communication</h2>
        </Col>
      </Row> 
      <Row >
        <Col smHidden xsHidden md={5} lg={5} className="text-right">  
        <hr />               
        </Col>
        <Col  sm={12} md={5} lg={5}>
          <p>We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
        </Col>
      </Row> 
      <Row >
        <Col mdOffset={5} lgOffset={5} lg={5} md={5} sm={12} >
          <Button bsStyle="success">Success</Button>
        </Col>
      </Row>
    </Grid>
  );
};
export default Section1;