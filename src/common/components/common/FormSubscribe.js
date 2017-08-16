import React from 'react';
import { Grid, Row, Col, FormControl, Form, Button } from 'react-bootstrap';

import './FormSubscribe.scss'

const Section8 = ({ lang: { formSubscribe } }) => {

  const formProps = {
  action: '//hobbiz.us15.list-manage.com/subscribe/post?u=1b6f730f6c4d358567cae6f3a&amp;id=ed64a3b330',
  method: 'post',
  id: 'mc-embedded-subscribe-form'
  }

  return (
    <div className="section8">
      <Grid>
        <Row className="text-center">
          <Col lg={12} md={12} sm={12}>
            <h3>{formSubscribe.header}</h3>
          </Col>
        </Row>
        <Row>
          <Form {...formProps}>
            <Col lg={5} md={5} sm={5} >
              <FormControl type="text" id="mce-FNAME" name="FNAME" placeholder={formSubscribe.placeholder.yourName}/>
            </Col>
            <Col lg={4} md={4} sm={4} >
              <FormControl type="email" id="mce-EMAIL" name="EMAIL" placeholder={formSubscribe.placeholder.email}/>
            </Col>            
            <Col lg={3} md={3} sm={3} smHidden  className="text-center">
             <Button type="submit">{formSubscribe.button}</Button>
            </Col>
            <Col sm={3} xsHidden lgHidden mdHidden className="text-center">
             <Button type="submit">{formSubscribe.buttonSm}</Button>
            </Col>
          </Form>
        </Row>
      </Grid>
    </div>
  );
};

export default Section8;