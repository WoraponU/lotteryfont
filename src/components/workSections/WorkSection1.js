import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { CardWork } from 'Components/common'
import LiquidCircle from 'Components/common/LiquidCircle';
import { pink, yellow } from 'Components/common/LiquidCircleColor';
import './WorkSection1.scss'

const Section1 = () => {
  return (
    <div className="worksection1">
      <Grid>
        <Row>
          <Col lg={4} md={4} sm={4}>
            <h1>our<br/>work</h1>
            <hr/>
            <p>we discovered that users were easily derailed by difficult-to-answer questions during the comparison.</p>
            <p>We saw a big opportunity to create a personalized user experience to help users attain more accuracy, as well as lower the site’s unnecessarily high abandon rate and boost brand loyalty.</p>             
            <LiquidCircle id={20} radius={189} color={pink} position={["3px", "63px", "auto", "auto"]}/>      
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/mac5.png' title='MAC-5'/>
          </Col>
          <Col lg={4} md={4} sm={4}>
              <CardWork  img='assets/images/Work/qualy.png' title='QUALY &amp; CO'/> 
          </Col>
        </Row>
        <Row className="Row2">
          <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/asap.png' title='ASAP PROJECT'/>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/ygg.png' title='YGGDRAZIL'/>
          </Col>
        </Row>
        <Row>                               
          <LiquidCircle id={21} radius={170} color={yellow} position={["auto", "auto", "-68px", "-68px"]}/> 
          <Col lgOffset={4} mdOffset={4}  smOffset={4} lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/chula.png' title='CHULA'/>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/btr.png' title='B THREE R'/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Section1;