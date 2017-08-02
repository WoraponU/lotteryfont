import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import moment from 'moment';

import './FormContact.scss';

const Section9 = () => {
  const day = moment().format("dddd");
 
  return (
    <div className="section9">
      <Grid>
        <Row>
          <Col lg={6} md={6} sm={6} className="title">
            <h5>@hobbizdigital </h5>
            <h1>It’s a Good <span>{day}</span><br/>To Drop Us A Line</h1>
          </Col>
          <Col lg={3}  md={3} sm={3}> <Image src="/assets/images/common/Footer/shop.png" className="img"/></Col>
          <Col lg={3} md={3} sm={3}> <Image src="/assets/images/common/Footer/form.png" /></Col>
        </Row>
        <Row>   
          <Col lg={3}  md={3} sm={3}> <Image src="/assets/images/common/Footer/room.png" /></Col>
          <Col lg={3}  md={3} sm={3} className="contact">
            <h4>hello@hobbiz.co.th</h4>
            <h4>(+66) 89-822-1223</h4><br/>
            <p>
              206-207 2th Floor <br/>
              Promphan Building 3<br/>
              Lat Phrao 3 Rd.<br/>
              Chom Phon, Chatuchak<br/>
              Bangkok, Thailand 10900
            </p>
            <br/>
            <Button>View google map</Button>
          </Col>
          <Col lg={3}  md={3} sm={3} className="socialGroup"> 
            <Image src="/assets/images/common/Footer/line.png" alt="facebookHobbiz"   href="/"/>       
            <Image src="/assets/images/common/Footer/ig.png" alt="facebookHobbiz"  href="/" className="iconIG"/>
            <Image src="/assets/images/common/Footer/fb.png" alt="facebookHobbiz"  href="#"/>
                  
          </Col>
          <Col lg={3}  md={3} sm={3}><Image src="/assets/images/common/Footer/girl.png" /></Col>                                        
        </Row>
      </Grid>
    </div>
  );
};

export default Section9;