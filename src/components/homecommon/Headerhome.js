import React from 'react';
import styles from './Home.scss'
// import classNames from 'classnames'
import LiquidButton from 'Components/common/LiquidButton';

import { Grid,Row,Col } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div className={styles.circleContainer}>       
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} md={6}>sds</Col>
            <Col sm={6} md={6}><LiquidButton id={1} radius={300} color1="#8F17E1" color2="#93d3d7" color3="#E509E6" /></Col>
          </Row> 
        </Grid>
      </div>      
  );
};
export default Headerhome;