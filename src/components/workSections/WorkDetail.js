import React from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';

import './WorkDetail.scss'

const WorkDetail = () => {
  return (
    <div className="workDetail">
      <Grid>
        <Row>

          <Col lgOffset={3} lg={8}><h2>Making it easier for users <br/>to find the right insurance.</h2></Col>
        </Row>
        <Row>
          <Col lgOffset={3} lg={6}>
          <h3>Giving users the tools to make <br/>the best decision.</h3>
          <p>How many miles do you drive in a year? It’s a tricky question to answer, and who knows how it might impact your car insurance if you get it wrong? Via in-home user research, we discovered that users were easily derailed by difficult-to-answer questions during the comparison. We saw a big opportunity to create a personalized user experience to help users attain more accuracy, as well as lower the site’s unnecessarily high abandon rate and boost brand loyalty.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <Row>sdsd</Row>
            <Row>sdasdas</Row>
          </Col>
          <Col lg={11}>
            <Image src="assets/images/Home/section5/bps.png"/>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default WorkDetail;