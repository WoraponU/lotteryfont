import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { CardWork } from 'Components/common'
import './WorkSection1.scss'
const Section1 = () => {
  return (
    <div className="worksection1">
        <Grid>
          <Col lg={4} md={4} sm={4}>
          <Row> <h1>
            our<br/>work
          </h1></Row>
          <Row>
            <p>we discovered that users were easily derailed 
            by difficult-to-answer questions during 
            the comparison.</p>
            <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p> <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p> <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p> <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p> <p>We saw a big opportunity to create a personalized 
            user experience to help users attain more accuracy, 
            as well as lower the site’s unnecessarily high 
            abandon rate and boost brand loyalty.</p>
          </Row>
         
          </Col>
           <Col lg={4} md={4} sm={4}>
            <CardWork  img='assets/images/Work/color.png' 
              content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor '/>
            </Col>
           <Col lg={4} md={4} sm={4}>
          sd
          </Col>
        </Grid>
    </div>
  );
};

export default Section1;