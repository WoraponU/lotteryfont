import React from 'react';
import styles from './Home.scss'
// import classNames from 'classnames'
import {Circle} from 'Components'
import { Grid,Row,Col } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div className={styles.circleContainer}>
        <Circle color='blue' width ="alignblue"/>
        <Circle color="yellow" width ="alignyellow"/>
        <Circle color='pink' width ="alignpink"/> 
        <Circle color="purple" width ="alignpurple"/>            
         <Grid>
          <Row className="show-grid">
            <Col sm={6} md={6}></Col>
            <Col sm={6} md={6}>sds</Col>
          </Row> 
          
        </Grid>
      </div>
      
     );
};
export default Headerhome;