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
          <Col md={11}>
            <h5 className="text-center">© 2017 HOBBIZ CO., LTD.</h5>      
          </Col>
          <Col md={1} className="text-right"><Image src="assets/images/Home/hb.png"/></Col>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;