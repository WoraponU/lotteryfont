import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'Components/common'

const Section6 = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
           
           <Card  img='assets/images/Home/section6/card1.png' 
                  h2='How to make nacho and taco like a pro!' 
                  h3='resources'
                  p='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
          </Col>         
        </Row>
      </Grid>
    </div>
  );
};

export default Section6;