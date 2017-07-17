import React from 'react';
import { Grid, Row, Col , FormGroup, FormControl, Form, Button } from 'react-bootstrap';

import './Section7.scss'

const Section7 = () => {
  return (
    <div className="section7">
      <Grid className="text-center">
         <h1>ask us anything</h1>
      </Grid>
      <Grid className="text-center containerShadow">
        <Row>
          <Col md="2">
            <hr/>
          </Col>
          <Col md="8" className="text-left">
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet</p>
          </Col>
        </Row>
        <Form>  
          <Row>
            <Col  md="6">
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="Your name*" />
              </FormGroup>
            </Col>
            <Col  md="6">
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="Email*" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col  md="6">
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="Phone number" />
              </FormGroup>
            </Col>
            <Col  md="6">
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="Company*" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col  md="12">
              <FormGroup controlId="formInlineName">
                <FormControl type="text" placeholder="What is on your mind?" />
              </FormGroup>
            </Col>           
          </Row>
          <Row>
            <Col  md="12">
              <Button type="submit">
                Send Us A Message
              </Button>
            </Col>           
          </Row>
        </Form>  
      </Grid>
    </div>
  );
};

export default Section7;