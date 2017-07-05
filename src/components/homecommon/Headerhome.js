import React from 'react';
// import styles from './Home.scss'
// import classNames from 'classnames'
import {Circle} from 'Components/Homecommon'
import { Grid,Row,Col,Clearfix } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={6}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/></Col>
            <Col sm={6} md={6}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/></Col>
          </Row>
        </Grid>
        <Circle/>
      </div>
      
     );
};
export default Headerhome;