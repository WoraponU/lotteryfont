import React from 'react';
import styles from './Home.scss'
// import classNames from 'classnames'
import LiquidCircle from 'Components/common/LiquidCircle';

import { Grid,Row,Col } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div className={styles.circleContainer}>       
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} md={6}>
            </Col>
            <Col sm={6} md={6}>
              <LiquidCircle id={2} radius={300} color="#55adf9" />
              <LiquidCircle id={1} radius={220} color="#ffea82" />
              <LiquidCircle id={3} radius={170} color="#8f17e1" />
            </Col>
          </Row> 
        </Grid>
      </div>      
  );
};
export default Headerhome;