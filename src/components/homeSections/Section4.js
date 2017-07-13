import React from 'react';
import { PageHeader, Row, Grid, Col, Image } from 'react-bootstrap';
import './Section4.scss'

const Section4 = () => {
  return (
    <div className="section4">
      <PageHeader>Small teams working on big challenges <br/>
        in honest collaboration with our clients.
      </PageHeader>
      <Col lg={3} md={2}>
            <Image src="assets/images/Home/section4/card1.png" className="imgOut" />
      </Col>
      <Grid>
        <Row >
         <Col lg={4} md={2} >
            <Image src="assets/images/Home/section4/card2.png" className="imgW355"/>
          </Col>
        </Row>
         <Row >
         <Col lg={8} md={2} mdOffset={1} >
            <Image src="assets/images/Home/section4/card5.png" />
          </Col>
          <Col lg={3} md={2}>
            <Image src="assets/images/Home/section4/card3.png" />
          </Col>
        </Row>
         <Row >
         <Col lg={3} md={2} mdOffset={6}>
            <Image src="assets/images/Home/section4/card4.png" />
          </Col>
         
        </Row>
      </Grid>
    </div>
  );
};

export default Section4;