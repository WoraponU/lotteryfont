import React from 'react';
import { Grid, Row, Col, FormControl, Form, Button } from 'react-bootstrap';

import './FormSubscribe.scss'

const Section8 = () => {
  return (
    <div className="section8">
      <Grid>
        <Row className="text-center">
          <Col lg={12} md={12} sm={12}>
            <h3>Receive Monthly Resources Striaght To Your Inbox</h3>
          </Col>
        </Row>
        <Row>
          <Form >
            <Col lg={5} md={5} sm={5}>
              <FormControl type="text" placeholder="Your name*"/>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <FormControl type="email" placeholder="Email*"/>
            </Col>            
            <Col lg={3} md={3} sm={3}>
             <Button type="submit">subscribe to newsletter</Button>
            </Col>
          </Form>
        </Row>
      </Grid>
    </div>
  );
};

export default Section8;