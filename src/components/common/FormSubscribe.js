import React from 'react';
import { Grid, Row, Col, FormControl, Form, Button } from 'react-bootstrap';

import './FormSubscribe.scss'

const Section8 = () => {
  return (
    <div className="section8">
      <Grid>
        <Row className="text-center">
          <Col md={12}>
            <h3>Receive Monthly Resources Striaght To Your Inbox</h3>
          </Col>
        </Row>
        <Row>
          <Form >
            <Col md={5}>
              <FormControl type="text" placeholder="Your name*"/>
            </Col>
            <Col md={4}>
              <FormControl type="email" placeholder="Email*"/>
            </Col>            
            <Col md={3}>
             <Button type="submit">subscribe to newsletter</Button>
            </Col>
          </Form>
        </Row>
      </Grid>
    </div>
  );
};

export default Section8;