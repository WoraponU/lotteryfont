import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';

import './Section3.scss'




class Section3 extends Component {  

  

 

  render() {
   
    return (
    <Grid className="sections3">
      <Row className="heading">
        <Col xs={12} md={12}>
          <p className="bigHead">our moms said, we are the best.</p>
        </Col>      
      </Row>
      <Row>
        <Col sm={6} md={3} className="img">
        <Image src="assets/images/Home/section3/img1.png" className="imgfull" />
        </Col>
        <Col sm={6} md={3} className="img">
        <Image src="assets/images/Home/section3/img2.png" className="imgfull" />
        </Col>
        <Col sm={6} md={3} className="img">
        <Image src="assets/images/Home/section3/img3.png" className="imgfull" />
        </Col>
        <Col sm={6} md={3}>
        <p className="pText1">Transform brands, grow businesses and make people’s lives better.</p>
        </Col> 
      </Row>
      <Row>
        <Col md={6} className="img">
          <Image src="assets/images/Home/section3/img4.png" className="imgfull" />
        </Col>
         <Col md={3} className="img">
          <Image src="assets/images/Home/section3/img5.png" className="imgfull" />
        </Col>
        <Col sm={6} md={3} className="img">
         <Image src="assets/images/Home/section3/line.png" className="imgline" />
        </Col> 
        <Col  md={6} className="img">
        <Image src="assets/images/Home/section3/img6.png" className="imgfull" />
        </Col> 
      </Row>
      <Row className="positonBotton">
        <Col md={6} >
          <div className="header">We are a Bangkok based digital agency with global reach.</div>
          <p>We believe brands are made by the interactions they create. We believe that beautiful and usable are complementary. We believe that everything we put in front of your customers should be interesting and useful to each one of them.</p>       
          <p>We are LiveArea, the PFS digital experience agency with a boutique approach and world-class capabilities. We meld strategy, creativity, and technology until they disappear beneath perfectly branded commerce experiences for core customers</p>
        </Col>
      </Row>
    </Grid>
     
    );
  }
}

export default Section3;
