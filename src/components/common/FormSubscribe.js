import React from 'react';
import { Grid, Row, Col, FormControl, Form, Button } from 'react-bootstrap';

import './FormSubscribe.scss'

const Section8 = ({ lang: { formSubscribe } }) => {
  return (
    <div className="section8">
      <Grid>
        <Row className="text-center">
          <Col lg={12} md={12} sm={12}>
            <h3>{formSubscribe.header}</h3>
          </Col>
        </Row>
        <Row>
          <Form >
            <Col lg={5} md={5} sm={5}>
              <FormControl type="text" placeholder={formSubscribe.placeholder.yourName}/>
            </Col>
            <Col lg={4} md={4} sm={4}>
              <FormControl type="email" placeholder={formSubscribe.placeholder.email}/>
            </Col>            
            <Col lg={3} md={3} sm={3}>
             <Button type="submit">{formSubscribe.button}</Button>
            </Col>
          </Form>
        </Row>
      </Grid>
    </div>
  );
};

export default Section8;