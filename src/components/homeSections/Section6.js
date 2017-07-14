import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import {Card} from 'Components/common'

const Section6 = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4}>
           
           <Card />
          </Col>         
        </Row>
      </Grid>
    </div>
  );
};

export default Section6;