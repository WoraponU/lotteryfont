import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

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
         <Col md={8}>
         <Row>
          <Col lg={12} md={12} sm={12}>
            <Tabs defaultActiveKey={2} id="Tab">
              <Tab eventKey={1} title="ALL WORK"></Tab>
              <Tab eventKey={2} title="POPULAR"></Tab>
              <Tab eventKey={3} title="PUBLIC"></Tab>
              <Tab eventKey={4} title="DESKTOP"></Tab>
              <Tab eventKey={5} title="MOBILE"></Tab>
            </Tabs>
          </Col>
         </Row>
         <Row>
          <Col lg={6} md={6} sm={6}>
            <CardWork   img='assets/images/Work/mac5.png' title='MAC-5'/>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <CardWork  img='assets/images/Work/chula.png' title='CHULA'/>            
          </Col>
          </Row>
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
            <CardWork  img='assets/images/Work/qualy.png' title='QUALY &amp; CO'/> 
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