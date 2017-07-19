import React from 'react';
import { Image, Grid, Col } from 'react-bootstrap';

import { FormContact, FormSubscribe } from 'Components/common'
import './Footer.scss'

const Footer = () => {
  return (
    <div>
      <FormSubscribe />
      <FormContact />
      <div className="footer">      
        <Grid>
          <Col lg={11} md={11} sm={11}>
            <h5 className="text-center">© 2017 HOBBIZ CO., LTD.</h5>      
          </Col>
          <Col lg={1} md={1} sm={1} className="text-right">
            <Image src="assets/images/Common/Footer/hobbiz.png"/>
          </Col>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;