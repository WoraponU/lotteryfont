import React from 'react';
import { Image, Grid, Col } from 'react-bootstrap';
import './FormFooter.scss'

const FormFooter = () => {
  return (
    <div className="footer">      
      <Grid>
        <Col lg={11} md={11} sm={11} xs={10}>
          <h5 className="text-center">© 2017 HOBBIZ CO., LTD.</h5>      
        </Col>
        <Col lg={1} md={1} sm={1} xs={1} className="text-right">
          <Image src="/assets/images/common/Footer/hobbiz.png"/>
        </Col>
      </Grid>
    </div>
  );
};

export default FormFooter;