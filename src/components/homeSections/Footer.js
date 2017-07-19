import React from 'react';
import './Footer.scss'
import { Image, Grid, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <div className="footer">
      <Grid>
        <Col md={11}>
          <h5 className="text-center">© 2017 HOBBIZ CO., LTD.</h5>      
        </Col>
        <Col md={1}><Image src="assets/images/Home/hb.png"/></Col>
      </Grid>
    </div>
  );
};

export default Footer;