import React from 'react';
import { Grid, Row, Image, Col } from 'react-bootstrap';

import './OurMom.scss'

const OurMom = () => {
  return (
    <Grid className="OurMom">
      <Row className="text-center">
        <h1>our moms said, we are the best.</h1>
      </Row>
      <Row>
        <Col lg={5} className="formFreshDesign">
          <Row><h1>FRESH DESIGN <br/> <span className="textSmall">meets</span> <span className="spanH1">clean code</span></h1></Row>
          <Row>
            <p>we discovered that users were easily derailed <br/> by difficult-to-answer questions during <br/> the comparison.</p>
            <p>We saw a big opportunity to create a personalized <br/>
              user experience to help users attain more accuracy, <br/>
              as well as lower the site’s unnecessarily high <br/>
              abandon rate and boost brand loyalty.</p>
          </Row>
        </Col>
        <Col lg={7} className="formUserInterfaces">
          <Row>
            <h1>User Interfaces</h1>
          </Row>
          <Row>
            <div className="groupName">
              <Col lg={2} className="text-right"><hr/></Col>
              <Col lg={10}><span>ALL WORK</span> <span>POPULAR</span> <span>THIS MONTH</span></Col>
            </div>
          </Row>
          <Row className="zImg">
            <Image src="/assets/images/about/ourMom/beby.png" className="card0"></Image>
            <Image src="/assets/images/about/ourMom/cardBlue.png" className="card1"></Image>
            <Image src="/assets/images/about/ourMom/card.png" className="card2"></Image>
          </Row>
          <Row>
            <h3>Every interaction is <br/>a communication</h3>
            <p> We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
          </Row>
        </Col>
       
      </Row>
    </Grid>
  );
};

export default OurMom;