import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './Section9.scss'

const Section9 = () => {
  return (
    <div className="section9">
      <Grid>
        <Row>
          <Col md={6}>
            <h5> @hobbizdigital </h5>
            <h1>It’s a Good Friday <br/> To Drop Us A Line</h1>
          </Col>
          <Col md={3}> <Image src="assets/images/Home/section3/img3.png" className="img"/></Col>
          <Col md={3}> <Image src="assets/images/Home/section3/img3.png" /></Col>
        </Row>
        <Row>
          <Col md={3}> <Image src="assets/images/Home/section3/img3.png" /></Col>
          <Col md={3}>
          <h3>hello@hobbiz.co.th</h3>
          <h3>(+66) 89-822-1223</h3>
          <p>
            206-207 2th Floor <br/>
            Promphan Building 3<br/>
            Lat Phrao 3 Rd.<br/>
            Chom Phon, Chatuchak<br/>
            Bangkok, Thailand 10900
            </p>
            <Button>View google map</Button>
          </Col>
          <Col md={3}> <Image src="assets/images/Home/section3/img3.png" className="img"/></Col>
          <Col md={3}> <Image src="assets/images/Home/section3/img3.png" /></Col>                                        
        </Row>
      </Grid>
    </div>
  );
};

export default Section9;