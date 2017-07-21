import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { CardWork } from 'Components/common'
import './WorkSection1.scss'
const Section1 = () => {
  return (
    <div className="worksection1">
        <Grid>
          <Row>
          <Col lg={4} md={4} sm={4}>
          <Row> <h1>
            our<br/>work
          </h1></Row>
          <Row>
            <p>we discovered that users were easily derailed 
            by difficult-to-answer questions during 
            the comparison.</p>
            <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p> 
          </Row>
         
          </Col>
           <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/mac5.png' title='MAC-5'/>
            </Col>
           <Col lg={4} md={4} sm={4}>
               <CardWork  img='assets/images/Work/qualy.png' title='QUALY &amp; CO'/> 
          </Col>
          </Row>
          <Row className="test">
            <Col lg={4} md={4} sm={4}>
              <CardWork  img='assets/images/Work/asap.png' title='ASAP PROJECT'/>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <CardWork  img='assets/images/Work/ygg.png' title='YGGDRAZIL'/>
            </Col>
          </Row>
          <Row>
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