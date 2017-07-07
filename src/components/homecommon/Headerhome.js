import React from 'react';
import styles from './Home.scss'
// import classNames from 'classnames'

import { Grid,Row,Col } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div className={styles.circleContainer}>       
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} md={6} ></Col>
            <Col sm={6} md={6}>sds</Col>
          </Row> 
        </Grid>
      </div>      
  );
};
export default Headerhome;