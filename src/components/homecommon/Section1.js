import React from 'react';
import styles from './Home.scss'

import { Grid,Row,Col,Image,Button } from 'react-bootstrap';

const Headerhome = () => {
  return (
      <div className={styles.section1}>     
         
        <Grid>
          <Row className={styles.colHidden} >
            <Col sm={6} md={6} className={styles.colHidden}></Col>
            <Col sm={6} md={6}>
              <Image src="assets/images/home/section1.png" responsive />
            </Col>
          </Row>
          <Row className={styles.margin1}>
            <Col xsOffset={4} md={6}>
              <h2>Every interaction <br/>
               is a communication</h2>
            </Col>
          </Row> 
          <Row >
            <Col sm={6} md={5} className="text-right">  
            <hr className={styles.imgRight} />               
            </Col>
            <Col sm={6} md={5}>
              <p>We Love Making Life Easier – It's Not Just Work-life Balance. Every Hobbist Are Driven By Passion. We Merge Work And Life Together With The Joy Of Making Our Client's Life Easier.</p>
            </Col>
          </Row> 
          <Row >
            <Col sm={6} md={5} ></Col>
            <Col sm={6} md={5}>
                <Button bsStyle="success">Success</Button>
            </Col>
          </Row>
        </Grid>
      </div>      
  );
};
export default Headerhome;