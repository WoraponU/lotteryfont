import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './FormContact.scss'

const Section9 = () => {
  return (
    <div className="section9">
      <Grid>
        <Row>
          <Col md={6} className="title">
            <h5> @hobbizdigital </h5>
            <h1>It’s a Good <span>Friday</span><br/> To Drop Us A Line</h1>
          </Col>
          <Col md={3}> <Image src="assets/images/Home/section9/shop.png" className="img"/></Col>
          <Col md={3}> <Image src="assets/images/Home/section9/form.png" /></Col>
        </Row>
        <Row>   
          <Col md={3}> <Image src="assets/images/Home/section9/room.png" /></Col>
          <Col md={3} className="contact">
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
          <Col md={3} className="socialGroup"> 
            <Image src="assets/images/Home/section9/line.png" alt="facebookHobbiz"   href="/"/>       
            <Image src="assets/images/Home/section9/ig.png" alt="facebookHobbiz"  href="/" className="iconIG"/>
            <Image src="assets/images/Home/section9/fb.png" alt="facebookHobbiz"  href="#"/>
                  
          </Col>
          <Col md={3}> <Image src="assets/images/Home/section9/girl.png" /></Col>                                        
        </Row>
      </Grid>
    </div>
  );
};

export default Section9;